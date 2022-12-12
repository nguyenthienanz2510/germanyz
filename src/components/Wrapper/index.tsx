import { Box } from "@mui/material";
import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode
}

export const FormWrapper = ({children} : WrapperProps) => {
  return (
    <Box mt='120px' maxWidth='600px' width='100%' mx='auto'>{children}</Box>
  )
}