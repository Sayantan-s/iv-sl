import {
  Checkbox,
  CloseButton,
  Field,
  Label,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ISearchBy } from "../../../store/slices/songs/type";
import { useState } from "react";
import { ERevenueSource } from "../../../store/apis/endpoints/songs/type";
import { useDispatch } from "../../../store";
import { songsActions } from "../../../store/slices/songs";

const FILTER_SEARCH = [
  { id: 1, name: ISearchBy.ARTIST, label: "Artist" },
  { id: 2, name: ISearchBy.SONG, label: "Song" },
];

const CHECKBOX_SELECT = {
  [ERevenueSource.Subscriptions]: {
    value: false,
    label: "Subscriptions",
  },
  [ERevenueSource.Ads]: {
    value: false,
    label: "Ads",
  },
};

export const Filters = () => {
  const [searchFilters, setSearchFilters] = useState<typeof FILTER_SEARCH>([]);
  const [revenueSource, setRevenueSource] = useState(CHECKBOX_SELECT);

  const dispatch = useDispatch();

  const uiButtonLabel = searchFilters.length
    ? searchFilters.map((searchFilter) => searchFilter.label).join(", ")
    : "Select";

  const handleCheckBox = (key: ERevenueSource) => (checked: boolean) => {
    setRevenueSource((prevState) => {
      const newState = structuredClone(prevState);
      newState[key].value = checked;
      return newState;
    });
  };

  const handleApplyFilters: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(
      songsActions.setSearchFilters({
        value: "",
        by: searchFilters.map((filter) => filter.name),
        revenueType: Object.entries(revenueSource)
          .filter(([_, { value }]) => value)
          .map(([key]) => key as ERevenueSource),
      })
    );
  };

  return (
    <div className="flex">
      <Popover className={"relative"}>
        <PopoverButton>Filter</PopoverButton>
        <PopoverPanel
          className={"absolute bg-white shadow-md shadow-gray-700/10 p-2"}
        >
          <div className="flex">
            <Listbox value={searchFilters} onChange={setSearchFilters} multiple>
              <ListboxButton>{uiButtonLabel}</ListboxButton>
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
              <input type="text" placeholder="search" />
            </div>
          </div>
          {Object.keys(revenueSource).map((eKey) => {
            const revenueKey = eKey as keyof typeof revenueSource;
            const checkbox = revenueSource[revenueKey];
            return (
              <Field key={eKey} className={"flex items-center gap-2"}>
                <Checkbox
                  checked={checkbox.value}
                  onChange={handleCheckBox(revenueKey)}
                  className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                >
                  {/* Checkmark icon */}
                  <svg
                    className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Checkbox>
                <Label className="text-gray-900">{checkbox.label}</Label>
              </Field>
            );
          })}
          <div>
            <button>Clear</button>
            <CloseButton onClick={handleApplyFilters}>Apply</CloseButton>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
};
