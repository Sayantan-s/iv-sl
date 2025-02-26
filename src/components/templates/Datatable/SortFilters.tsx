import {
  Radio,
  RadioGroup,
  Field,
  Label,
  Popover,
  PopoverButton,
  PopoverPanel,
  Input,
  Switch,
} from "@headlessui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Direction, ISortByItemKey } from "../../../store/slices/songs/type";
import React, { Fragment, useState } from "react";
import { useDispatch } from "../../../store";
import { songsActions } from "../../../store/slices/songs";
import { useGetControllers } from "../../../store/hooks/useGetFilters";
import { map, clone } from "es-toolkit/compat";
import { motion } from "motion/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

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

  return (
    <div className="flex text-sm">
      <Popover className={"relative"}>
        <PopoverButton>Sort</PopoverButton>
        <PopoverPanel
          className={
            "absolute bg-white shadow-md shadow-gray-700/10 p-2 w-[20rem]"
          }
        >
          {({ close }) => (
            <Fragment>
              <SortableTodos
                options={options}
                onRemoveSortable={handleRemoveSortable}
                onChangeDirection={handleChangeDirection}
              />
              <div className="flex justify-between">
                <Listbox multiple value={options} onChange={setOptions}>
                  <ListboxButton
                    className={"px-3 py-0.5 border border-gray-100 bg-gray-50"}
                  >
                    <span>Pick options to sort</span>
                    <span>{options.length}</span>
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom"
                    className={
                      "bg-white mt-1.5 w-[10rem] border border-gray-100 shadow-md shadow-gray-500/10 rounded-md"
                    }
                  >
                    {SORT_ITEMS.map((item) => (
                      <ListboxOption
                        key={item.name}
                        value={item}
                        className={"group"}
                      >
                        {({ selected }) => (
                          <Fragment>
                            <button
                              disabled={selected}
                              className="w-full disabled:opacity-50 flex justify-between items-center text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600 px-2 py-1"
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
                <div>
                  <button>Clear</button>
                  <button onClick={handleApplyFilters(close)}>Apply</button>
                </div>
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
  return (
    <div>
      {options.map((option, index) => (
        <Field key={option.name} className="flex justify-between items-center">
          <Label>{option.label}</Label>
          <div className="flex items-center gap-2">
            <Switch
              checked={option.direction === Direction.ASC}
              onChange={onChangeDirection(index)}
              className={
                "group h-4 rounded-full cursor-pointer aspect-video bg-orange-200 flex p-[0.15rem] data-[checked]:justify-end justify-start"
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
