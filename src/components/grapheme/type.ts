export enum StatusType {
  valid = "valid",
  present = "present",
  absent = "absent",
}

type GraphemeProps = {
  value: string;
  status: StatusType | null;
};

export default GraphemeProps;
