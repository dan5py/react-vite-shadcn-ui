import React, { useCallback, useState } from "react";
import { Box, Heading, Text, Grid } from "@radix-ui/themes";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import UploadMultiFile from "./file-upload-drop-zone";

export default function FileDrop({
  acceptedFiles = [],
}: {
  acceptedFiles: File[];
}) {
  console.log(acceptedFiles.length);
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Upload nieuw document</CardTitle>
        <CardDescription>
          Het bestand wordt eerst gecheckt voordat het kan worden verwerkt
        </CardDescription>
      </CardHeader>
      <CardContent>
        <UploadMultiFile />
        {/* TODO: If files, show them here one by one. For file in files: */}
        {acceptedFiles.length > 0 && (
          <Box>
            <Separator className="my-4" />
            <Heading size={"2"} className="mb-4">
              Geüploade bestanden
            </Heading>
            <Grid columns="1" gap="3" width="auto">
              {acceptedFiles.map((file, index) => (
                <div key={index}>
                  {file.name} ({file.size} bytes)
                </div>
              ))}
            </Grid>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
