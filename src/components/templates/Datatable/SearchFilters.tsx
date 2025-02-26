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
import React, { Fragment, SetStateAction, useRef, useState } from "react";
import { ERevenueSource } from "../../../store/apis/endpoints/songs/type";
import { useDispatch } from "../../../store";
import { songsActions } from "../../../store/slices/songs";
import { useGetControllers } from "../../../store/hooks/useGetFilters";
import { CheckIcon } from "@heroicons/react/24/solid";
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

  const [searchByFilters, setSearchByFilters] = useSearchBy(controls);
  const [revenueSourceFilter, setRevenueSourceFilter] =
    useChooseRevenue(controls);
  const [searchedValueFilter, setSearchedValueFilter] =
    useSearchValue(controls);

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

  return (
    <div className="flex text-sm">
      <Popover className={"relative"}>
        <PopoverButton>Filter</PopoverButton>
        <PopoverPanel
          className={"absolute bg-white shadow-md shadow-gray-700/10 p-2"}
        >
          {({ close }) => (
            <Fragment>
              <div className="flex">
                <Listbox
                  value={searchByFilters}
                  onChange={setSearchByFilters}
                  multiple
                >
                  <ListboxButton ref={listboxButtonRef}>
                    {uiButtonLabel}
                  </ListboxButton>
                  <ListboxOptions anchor="bottom" className={"bg-white"}>
                    {FILTER_SEARCH.map((filter) => (
                      <ListboxOption
                        key={filter.id}
                        value={filter}
                        className="data-[focus]:bg-blue-100"
                      >
                        {filter.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
                <div>
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder="search"
                    value={searchedValueFilter}
                    onChange={handleChange}
                    disabled={!!!searchByFilters.length}
                  />
                </div>
              </div>
              <RadioGroup
                value={revenueSourceFilter!}
                onChange={setRevenueSourceFilter}
                aria-label="Revenue Source"
              >
                {CHECKBOX_SEARCH.map((checkbox) => (
                  <Field key={checkbox.id} className={"flex gap-1.5"}>
                    <Radio value={checkbox} as={Fragment}>
                      {({ checked }) => (
                        <span
                          className={clsx(
                            "w-5 h-5 rounded-full flex items-center justify-center p-1 text-white",
                            checked ? "bg-orange-500" : "bg-transparent"
                          )}
                        >
                          {checked ? <CheckIcon /> : null}
                        </span>
                      )}
                    </Radio>
                    <Label>{checkbox.label}</Label>
                  </Field>
                ))}
              </RadioGroup>
              <div>
                <button>Clear</button>
                <button onClick={handleApplyFilters(close)}>Apply</button>
              </div>
            </Fragment>
          )}
        </PopoverPanel>
      </Popover>
    </div>
  );
};

function useSearchValue(
  controls: ITableControllerState
): [string, React.Dispatch<React.SetStateAction<string>>] {
  return useState(() => get(controls, "filters.search.value"));
}

function useChooseRevenue(
  controls: ITableControllerState
): [
  TCheckboxSearch[number] | undefined,
  React.Dispatch<React.SetStateAction<TCheckboxSearch[number] | undefined>>
] {
  return useState(() => {
    const revenueType = controls.filters.search.revenueType;
    return find(CHECKBOX_SEARCH, (state) => state.name === revenueType);
  });
}

function useSearchBy(
  controls: ITableControllerState
): [TFilterSearch, React.Dispatch<SetStateAction<TFilterSearch>>] {
  return useState(
    () =>
      filter(
        map(controls.filters.search.by, (key) =>
          find(FILTER_SEARCH, (filter) => filter.name === key)
        ),
        Boolean
      ) as TFilterSearch
  );
}
