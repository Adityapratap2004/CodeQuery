import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className=" primary-gradient min-h-[46px] px-4 py-3 !text-light-900" >
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filter={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        <QuestionCard
           clerkId="ewfbvth"
           _id="Wrgebfg"
           title="Best practices for data fecthing in nextjs"
           tags={[{_id:"Def",name:"Nextjs"},{_id:"Desdff",name:"Reactjs"}]}
           author={{_id:"sdfef",name:"dvrg",picture:"/assets/account.svg",clerkId:"ewfbvth"}}
           views={2342}
          //  upvotes=
          //  answers=
          //  createdAt=

        />
      </div>

    </main>
  );
}
