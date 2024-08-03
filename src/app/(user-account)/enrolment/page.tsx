import React from "react";
// import { useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { redirect } from "next/navigation";



type Props = {};

const Page = (props: Props) => {
  const invoices = [
    {
      _id: "001",
      course: "Think in a redux way",
      date: "22 Jul 2023 08:08:59 PM	",
      enrollmentID: "LWSCTXN-911778F2",
      batch: "On-Demand",
      Certificate: "N/A"
    }
  ]
  // const { user } = useSelector((state: any) => state.auth)
  // if (!user) return redirect('/login');
  return (
    <div className="col-span-10">
      <div className="">
        <h2 className="text-[25px] font-semibold">Course Enrollment</h2>
        <h5>Courses you have enrolled in on our platform</h5>
      </div>
      <Separator className="mt-4 mb-8" />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">course</TableHead>
            <TableHead>Enrollment time</TableHead>
            <TableHead>Enrollment ID</TableHead>
            <TableHead>Batch</TableHead>
            <TableHead>Certificate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium">{invoice.course}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.enrollmentID}</TableCell>
              <TableCell className="text-center">{invoice.batch}</TableCell>
              <TableCell className="text-left">{invoice.Certificate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
