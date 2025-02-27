import {
  Radio,
  RadioGroup,
  Field,
  Label,
  Popover,
  PopoverButton,
  PopoverPanel,
  Input,
} from "@headlessui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  ISearchBy,
  ITableControllerState,
} from "../../../store/slices/songs/type";
import React, {
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { ERevenueSource } from "../../../store/apis/endpoints/songs/type";
import { useDispatch } from "../../../store";
import { songsActions } from "../../../store/slices/songs";
import { useGetControllers } from "../../../store/hooks/useGetFilters";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import { find, map, filter, get, join, trim } from "es-toolkit/compat";

const FILTER_SEARCH = [
  { id: 1, name: ISearchBy.ARTIST, label: "Artist" },
  { id: 2, name: ISearchBy.SONG, label: "Song" },
];

type TFilterSearch = typeof FILTER_SEARCH;

const CHECKBOX_SEARCH = [
  {
    id: 1,
    name: ERevenueSource.Subscriptions,
    label: "Subscriptions",
    value: false,
  },
  { id: 2, name: ERevenueSource.Ads, label: "Ads", value: false },
];
type TCheckboxSearch = typeof CHECKBOX_SEARCH;

export const SearchFilters = () => {
  const controls = useGetControllers();
  const dispatch = useDispatch();

  const [searchByFilters, setSearchByFilters] = useState<TFilterSearch>([]);
  const [revenueSourceFilter, setRevenueSourceFilter] = useState<
    TCheckboxSearch[number] | undefined
  >();
  const [searchedValueFilter, setSearchedValueFilter] = useState("");

  useEffect(
    function syncLocalWithGlobalState() {
      // Add subscriptions to other redux states from here!

      // This is a subscriber to the redux state, it will update the checkbox ui, when piechart is clicked!
      setRevenueSourceFilter(() => {
        const revenueType = controls.filters.search.revenueType;
        return find(CHECKBOX_SEARCH, (state) => state.name === revenueType);
      });
    },
    [controls]
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const listboxButtonRef = useRef<HTMLButtonElement>(null);

  const handleApplyFilters =
    (
      close: (
        focusableElement?:
          | HTMLElement
          | React.MutableRefObject<HTMLElement | null>
      ) => void
    ) =>
    () => {
      if (isSearchInputEmpty) return inputRef.current?.focus();
      if (isSearchParamEmpty) return listboxButtonRef.current?.click();
      dispatch(
        songsActions.setSearchFilters({
          value: searchedValueFilter,
          by: map(searchByFilters, "name"),
          revenueType: get(revenueSourceFilter, "name", null),
        })
      );
      close();
    };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (eve) =>
    setSearchedValueFilter(eve.target.value);

  const isSearchParamEmpty = !!(
    trim(searchedValueFilter).length && !searchByFilters.length
  );

  const isSearchInputEmpty = !!(
    searchByFilters.length && !trim(searchedValueFilter).length
  );

  const uiButtonLabel = searchByFilters.length
    ? join(map(searchByFilters, "label"), ", ")
    : "Select";

  const isFiltersApplied =
    get(controls, "filters.search.revenueType") ||
    get(controls, "controls.filters.search.value");

  return (
    <div className="flex text-sm">
      <Popover className={"relative"}>
        <PopoverButton
          className={clsx(
            "flex gap-1 items-center cursor-pointer focus:outline-orange-100 px-2 py-1 rounded-md",
            isFiltersApplied ? "text-orange-500 focus:bg-orange-100" : ""
          )}
        >
          <FunnelIcon className="size-4" />
          <span>{isFiltersApplied ? `Filters Applied` : "Filter"}</span>
        </PopoverButton>
        <PopoverPanel
          className={
            "absolute z-40  mt-2 bg-white border border-gray-100 rounded-md shadow-md shadow-gray-700/10 min-w-[20rem]"
          }
        >
          {({ close }) => (
            <Fragment>
              <div className="p-3 border-b border-b-gray-100">
                <div className="flex gap-2 w-full">
                  <Listbox
                    value={searchByFilters}
                    onChange={setSearchByFilters}
                    multiple
                  >
                    <ListboxButton
                      ref={listboxButtonRef}
                      className={
                        "flex-[0.3] py-1 border focus:outline-orange-300 text-xs border-gray-100 bg-gray-50 rounded-md gap-1.5 flex items-center justify-center"
                      }
                    >
                      {uiButtonLabel}
                    </ListboxButton>
                    <ListboxOptions
                      anchor="bottom"
                      className={
                        "bg-white z-50 mt-1.5 w-[10rem] border border-gray-100 shadow-md shadow-gray-500/10 rounded-md"
                      }
                    >
                      {FILTER_SEARCH.map((filter) => (
                        <ListboxOption
                          key={filter.id}
                          value={filter}
                          className="group w-full data-[focus]:bg-orange-100 data-[focus]:text-orange-600 disabled:opacity-50 flex justify-between items-center text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600 px-2 py-1"
                        >
                          <span>{filter.label}</span>
                          <CheckIcon className="size-3 group-data-[selected]:visible invisible" />
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Listbox>
                  <div className="flex-[0.7]">
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder={"search. eg. taylor"}
                      value={searchedValueFilter}
                      onChange={handleChange}
                      disabled={!!!searchByFilters.length}
                      className={
                        "w-full h-full px-2 disabled:opacity-75 disabled:cursor-not-allowed  focus:outline-orange-300 border border-gray-100 text-gray-700 rounded-md"
                      }
                    />
                  </div>
                </div>
                <RadioGroup
                  value={revenueSourceFilter!}
                  onChange={setRevenueSourceFilter}
                  aria-label="Revenue Source"
                  className={"flex items-center mt-3 space-x-3"}
                >
                  {CHECKBOX_SEARCH.map((checkbox) => (
                    <Field key={checkbox.id} className={"flex gap-1.5"}>
                      <Radio value={checkbox} as={Fragment}>
                        {({ checked }) => (
                          <span
                            className={clsx(
                              "w-5 h-5 rounded-md flex items-center justify-center p-1 text-white",
                              checked
                                ? "bg-orange-500 border border-transparent"
                                : "bg-transparent border border-gray-200"
                            )}
                          >
                            <CheckIcon className="size-3" />
                          </span>
                        )}
                      </Radio>
                      <Label>{checkbox.label}</Label>
                    </Field>
                  ))}
                </RadioGroup>
              </div>
              <div className="px-3 py-1.5 bg-gray-50 flex justify-end">
                <button
                  onClick={handleApplyFilters(close)}
                  className="bg-gray-900 px-3 py-1 text-xs text-gray-100 shadow shadow-gray-900/10  rounded-md"
                >
                  Apply filter
                </button>
              </div>
            </Fragment>
          )}
        </PopoverPanel>
      </Popover>
    </div>
  );
};
