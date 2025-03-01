import {
  Field,
  Label,
  Popover,
  PopoverButton,
  PopoverPanel,
  Switch,
} from "@headlessui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Direction, ISortByItemKey } from "../../../store/slices/songs/type";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "../../../store";
import { songsActions } from "../../../store/slices/songs";
import { useGetControllers } from "../../../store/hooks/useGetFilters";
import { map, clone, find } from "es-toolkit/compat";
import { motion } from "motion/react";
import {
  AdjustmentsVerticalIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

const SORT_ITEMS = [
  {
    label: "Last Streamed On",
    direction: Direction.ASC,
    name: ISortByItemKey.LastStreamedOn,
  },
  {
    label: "Streams",
    direction: Direction.ASC,
    name: ISortByItemKey.StreamCount,
  },
];

type TSortItem = (typeof SORT_ITEMS)[number];

export const SortFilters = () => {
  const controls = useGetControllers();
  const dispatch = useDispatch();
  const [options, setOptions] = useState<TSortItem[]>([]);

  useEffect(
    function syncLocalWithGlobalState() {
      // Add subscriptions to other redux states from here!
      setOptions(
        map(controls.filters.sort, (sortFilter) => {
          const targetFilter = find(
            SORT_ITEMS,
            (item) => item.name === sortFilter.key
          );
          return targetFilter!;
        })
      );
    },
    [controls]
  );

  const handleApplyFilters =
    (
      close: (
        focusableElement?:
          | HTMLElement
          | React.MutableRefObject<HTMLElement | null>
      ) => void
    ) =>
    () => {
      dispatch(
        songsActions.setSortFilters(
          map(options, (option) => ({
            key: option.name,
            direction: option.direction,
          }))
        )
      );
      close();
    };

  const handleChangeDirection = (index: number) => (value: boolean) => {
    setOptions((prevState) => {
      const newState = clone(prevState);
      newState[index].direction = value ? Direction.ASC : Direction.DSC;
      return newState;
    });
  };

  const handleRemoveSortable = (optionName: ISortByItemKey) => () => {
    setOptions((prevState) =>
      prevState.filter((option) => option.name !== optionName)
    );
  };

  const POPOVER_BUTTON_TEXT = controls.filters.sort.length
    ? `Sorted by ${controls.filters.sort.length} rule`
    : "Sort";

  const POPOVER_BUTTON_CLASSNAME =
    "flex gap-1 items-center cursor-pointer focus:outline-orange-100 px-2 py-1 rounded-md aria-[selected=true]:text-orange-500 aria-[selected=true]:bg-orange-100 sm:aspect-auto aspect-square";

  return (
    <div className="flex text-sm">
      <Popover className={"relative"}>
        <PopoverButton
          className={POPOVER_BUTTON_CLASSNAME}
          aria-selected={!!controls.filters.sort.length}
        >
          <AdjustmentsVerticalIcon className="size-4" />
          <span className="sm:block hidden">{POPOVER_BUTTON_TEXT}</span>
        </PopoverButton>
        <PopoverPanel
          anchor={{
            to: "bottom end",
            gap: 4,
          }}
          className={
            "absolute z-40 bg-white border border-gray-100 rounded-md shadow-md shadow-gray-700/10 min-w-[20rem]"
          }
        >
          {({ close }) => (
            <Fragment>
              <SortableTodos
                options={options}
                onRemoveSortable={handleRemoveSortable}
                onChangeDirection={handleChangeDirection}
              />
              <div className="flex justify-between p-3">
                <Listbox multiple value={options} onChange={setOptions}>
                  <ListboxButton
                    className={
                      "px-3 py-1 border text-xs border-gray-100 bg-gray-50 rounded-md gap-1.5 flex items-center"
                    }
                  >
                    <span
                      className={clsx(
                        options.length ? "flex" : "hidden",
                        "items-center font-semibold justify-center w-4 h-4 border border-dashed text-[0.5rem] border-orange-300 rounded bg-orange-100 text-orange-500"
                      )}
                    >
                      {options.length}
                    </span>
                    <span>Pick options to sort</span>
                  </ListboxButton>
                  <ListboxOptions
                    hidden={options.length === SORT_ITEMS.length}
                    anchor="bottom"
                    className={
                      "bg-white z-50 mt-1.5 w-[10rem] border border-gray-100 shadow-md shadow-gray-500/10 rounded-md"
                    }
                  >
                    {map(SORT_ITEMS, (item) => (
                      <ListboxOption
                        key={item.name}
                        value={item}
                        className={"group data-[selected]:hidden"}
                      >
                        {({ selected }) => (
                          <Fragment>
                            <button
                              disabled={selected}
                              className="w-full group-data-[focus]:bg-orange-100 group-data-[focus]:text-orange-600 disabled:opacity-50 flex justify-between items-center text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600 px-2 py-1"
                            >
                              <span>{item.label}</span>
                              <CheckIcon className="size-3 group-data-[selected]:visible invisible" />
                            </button>
                          </Fragment>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
                <button
                  tabIndex={1}
                  onClick={handleApplyFilters(close)}
                  className="bg-gray-900 px-3 py-1 text-xs text-gray-100 shadow shadow-gray-900/10 leading-0 rounded-md"
                >
                  Apply
                </button>
              </div>
            </Fragment>
          )}
        </PopoverPanel>
      </Popover>
    </div>
  );
};

interface IPropsSortableTodos {
  options: TSortItem[];
  onChangeDirection: (index: number) => (value: boolean) => void;
  onRemoveSortable: (optionName: ISortByItemKey) => () => void;
}

function SortableTodos({
  options,
  onChangeDirection,
  onRemoveSortable,
}: IPropsSortableTodos) {
  if (!options.length) return <SortableTodosFallback />;
  return (
    <div className="space-y-2 p-3 border-b border-gray-100">
      {options.map((option, index) => (
        <Field key={option.name} className="flex justify-between items-center">
          <Label passive>{option.label}</Label>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">ascending:</span>
            <Switch
              checked={option.direction === Direction.ASC}
              onChange={onChangeDirection(index)}
              className={
                "group h-4 rounded-full cursor-pointer aspect-video bg-orange-200 flex p-[0.15rem] data-[checked]:justify-end data-[checked]:bg-orange-500 justify-start"
              }
            >
              <motion.span
                aria-hidden="true"
                layout
                className="h-[10/12] rounded-full aspect-square bg-white shadow"
              />
            </Switch>
            <button
              onClick={onRemoveSortable(option.name)}
              className="hover:text-rose-500 text-gray-400 w-max  aspect-square h-full"
            >
              <XMarkIcon className="size-3" />
            </button>
          </div>
        </Field>
      ))}
    </div>
  );
}

const SortableTodosFallback = () => {
  return (
    <div className="p-3 border-b border-gray-100">
      <h4 className="text-xs text-gray-700 font-medium">
        No sorts applied to this view
      </h4>
      <p className="text-xs text-gray-400">
        Add an item below to sort the view
      </p>
    </div>
  );
};
