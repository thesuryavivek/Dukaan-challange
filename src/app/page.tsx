import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownUp, Download, Info, Search } from "lucide-react";

export default function Home() {
  const sampleData = {
    orderId: 281209,
    date: new Date("7 July, 2023"),
    amount: 1_278.23,
    fees: 22,
  };

  const data = Array.from({ length: 20 }, () => sampleData);

  return (
    <div className="p-8 text-[#1A181E] bg-[#FBFAFB] flex-1 space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-xl">Overview</h1>

        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="yesterday">Yesterday</SelectItem>
            <SelectItem value="last-week">Last Week</SelectItem>
            <SelectItem defaultChecked value="last-month">
              Last Month
            </SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-5">
        <Card heading="Online orders" stat={"231"} />
        <Card heading="Amount received" stat={"₹23,92,312.19"} />
      </div>

      <h2>Transactions | This Month</h2>

      <div className="bg-white shadow-custom p-3 pb-6 rounded-lg space-y-3">
        <div className="flex justify-between">
          <div className="flex justify-center border border-[#D9D9D9] items-center rounded px-4 py-2.5 space-x-2 focus-within:ring-2 ring-zinc-500">
            <Search size={18} color="#999999" opacity={60} />
            <input
              type="text"
              className="bg-transparent w-full h-full text-sm outline-none"
              placeholder="Search by order ID..."
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button variant={"outline"} className="space-x-2 flex items-center">
              <span className="text-[#4D4D4D]">Sort</span>
              <ArrowDownUp size={16} color="#4D4D4D" />
            </Button>
            <Button variant={"outline"} className="p-2">
              <Download size={20} color="#4D4D4D" />
            </Button>
          </div>
        </div>

        <table className="w-full">
          <thead className="w-full">
            <tr className="bg-[#F2F2F2] rounded w-full">
              <th className="font-medium py-2.5 px-3 rounded-l text-left text-sm">
                Order ID
              </th>
              <th className="font-medium py-2.5 px-3 text-center text-sm">
                Order date
              </th>
              <th className="font-medium py-2.5 px-3 text-center text-sm">
                Order amount
              </th>
              <th className="font-medium py-2.5 px-3 text-right rounded-r text-sm">
                <div className="flex justify-end items-center space-x-2">
                  <span>Transaction fees</span>
                  <span>
                    <Info size={14} />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="">
                <td className="text-left p-2 text-[#146EB4] hover:underline cursor-pointer hover:underline-offset-4">
                  #{item.orderId}
                </td>
                <td className="text-center p-2">
                  {item.date.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td className="text-center p-2">₹{item.amount}</td>
                <td className="text-right p-2">₹{item.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="border-[#D9D9D9] border"
                  href="#"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive href="#">
                  10
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">11</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">12</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">13</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">14</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">15</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">16</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">17</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">18</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext className="border-[#D9D9D9] border" href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
