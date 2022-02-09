export enum StatusType {
  valid = "valid",
  present = "present",
  absent = "absent",
}

type GraphemeProps = {
  value: string;
  status: StatusType;
};

export default GraphemeProps;
