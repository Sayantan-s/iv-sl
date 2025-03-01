import { Skeleton } from "@components/utils/Skeleton";
import { Table } from "@components/utils/Table";
import { fill, map } from "es-toolkit/compat";
import { FC } from "react";

interface IProps {
  rows?: number;
}

export const TableFallback: FC<IProps> = ({ rows = 5 }) => {
  return map(fill(Array(rows), true), (_, index) => (
    <TableRowFallback key={index} />
  ));
};

const TableRowFallback = () => {
  return (
    <Table.Row className="flex px-2 py-3 gap-2">
      <Table.Cell className="flex gap-2 flex-[0.4]">
        <Skeleton
          className="w-10 h-10 relative overflow-hidden shrink-0"
          circle
        />
        <Skeleton className="w-full h-full" />
      </Table.Cell>
      <Table.Cell className="flex-[0.2]">
        <Skeleton className="w-full h-10" />
      </Table.Cell>
      <Table.Cell className="flex-[0.3]">
        <Skeleton className="w-full h-10" />
      </Table.Cell>
      <Table.Cell className="flex-[0.1]">
        <Skeleton className="w-full h-10" />
      </Table.Cell>
    </Table.Row>
  );
};
