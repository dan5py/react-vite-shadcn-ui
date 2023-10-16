import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Flex, Text } from "@radix-ui/themes";
import { UploadIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UploadMultiFileProps {
  error?: boolean;
  showPreview?: boolean;
  files?: File[];
  onRemove?: (file: File) => void;
  onRemoveAll?: () => void;
  helperText?: React.ReactNode;
  sx?: object;
}

export default function UploadMultiFile({
  error = false,
  showPreview = false,
  files = [],
  onRemove,
  onRemoveAll,
  helperText,
  sx = {},
  ...other
}: UploadMultiFileProps) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    ...other,
  });

  return (
    <div {...getRootProps()}>
      <Flex
        direction="column"
        p={"6"}
        gap={"2"}
        my={"2"}
        justify="center"
        align="center"
        className={`hover:cursor-pointer hover:opacity-70 h-60 w-100 rounded-md border border-dashed text-sm ${
          isDragActive
            ? "border-primary text-primary bg-secondary-main opacity-70"
            : ""
        } ${
          isDragReject || error
            ? "text-error-main border-error-light bg-error-lighter"
            : ""
        }`}
      >
        <input {...getInputProps()} />
        <UploadIcon className="mb-3" />
        <Box>
          <Text as="div">
            {isDragActive
              ? "Bestand hier plaatsen"
              : "Sleep bestand hiernaartoe"}
          </Text>
          <Text as="div" className={cn(buttonVariants({ variant: "link" }))}>
            {isDragActive ? "" : "of klik om te zoeken"}
          </Text>
        </Box>
        {helperText && helperText}
      </Flex>
    </div>
  );
}
