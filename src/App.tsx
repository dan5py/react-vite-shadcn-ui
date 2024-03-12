import React from 'react';
import CountBtn from '@/components/CountBtn';
import ReactSVG from '@/assets/react.svg';
import { Badge } from '@/components/ui/badge';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"


function App() {

  const [showPopUp, setShowPopUp] = React.useState(false)
  const togglePopUp = () => setShowPopUp(!showPopUp)

  return (
    <> 
      <main className="bg-blue-200 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Questionnaire</CardTitle>
            <CardDescription>Please fill out the questionnaire below.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="buildType">Choose the build type</Label>
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="question1">Question 1</Label>
                <Input className="w-[100px]" id="question1" placeholder="Short response" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="question2">Question 2</Label>
                <Input className="w-[100px]" id="question2" placeholder="Short response" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="question3">Question 3</Label>
                <Input className="w-[100px]" id="question3" placeholder="Short response" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="question4">Question 4</Label>
                <Input className="w-[100px]" id="question4" placeholder="Short response" />
                <Button onClick={undefined}>Generate</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Question</TableHead>
                    <TableHead>Response</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Choose the build type</TableCell>
                    <TableCell>Option 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Question 2</TableCell>
                    <TableCell>Short response</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Question 2</TableCell>
                    <TableCell>Short response</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Question 2</TableCell>
                    <TableCell>Short response</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Question 2</TableCell>
                    <TableCell>Short response</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="flex gap-4">
                <Button className="bg-green-500 text-white" onClick={togglePopUp}>
                  LGTM
                </Button>
                <Button className="bg-blue-500 text-white">Edit</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  )
}

export default App;
