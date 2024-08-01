"use client"
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetUserOrdersQuery } from "@/redux/features/orders/ordersApi";
import React from "react";

type Props = {};

const Page = (props: Props) => {
    // const invoices = [
    //     {
    //         _id: "001",
    //         course: "Think in a redux way",
    //         date: "22 Jul 2023 08:08:59 PM	",
    //         paymentMethod: "SSLCOMMERZ",
    //         amount: "1,100 Rs",
    //         invoiceNo: "LWSCTXN-911778F2",
    //         paymentStatus: "Done",
    //         option: "N/A"
    //     }
    // ]
    const { data: ordersData, isLoading, error } = useGetUserOrdersQuery({});
    return (
        <>
            {
                isLoading ? (<h2>Loading...</h2>) : (
                    <div className="col-span-10">
                        <div className="">
                            <h2 className="text-[25px] font-semibold">Transaction</h2>
                            <h5>The transactions you have made on our platform</h5>
                        </div>
                        <Separator className="mt-4 mb-8" />
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">course</TableHead>
                                    <TableHead>date</TableHead>
                                    <TableHead>Payment Method</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Invoice No</TableHead>
                                    <TableHead>Payment Status</TableHead>
                                    <TableHead className="">option</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {ordersData.data && ordersData.data.map((order: any) => (
                                    <TableRow key={order._id}>
                                        <TableCell className="font-medium">{order.name ? order?.name : "Think in a redux way"}</TableCell>
                                        <TableCell>{order?.createdAt}</TableCell>
                                        <TableCell>{order?.payment_info?.payment_method_types[0]}</TableCell>
                                        <TableCell className="text-center">{order?.payment_info?.amount / 100} $</TableCell>
                                        <TableCell className="text-left">{order?.payment_info?.id}</TableCell>
                                        <TableCell className="text-center">{order?.payment_info?.status}</TableCell>
                                        <TableCell className="text-center">{"N/A"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                {/* <TableRow>
                                    <TableCell colSpan={6}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow> */}
                            </TableFooter>
                        </Table>
                    </div>)
            }
        </>
    );
};

export default Page;
