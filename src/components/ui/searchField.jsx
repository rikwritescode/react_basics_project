import { Input } from "@chakra-ui/react";

export const SearchField = ({ value, onChange, ...props }) => {
  return <Input value={value} onChange={onChange} {...props} />;
};
