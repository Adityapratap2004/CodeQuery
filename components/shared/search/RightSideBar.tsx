import Image from "next/image"
import Link from "next/link"
import RenderTag from "../RenderTag"

const hotQuestion = [
    { _id: 1, title: "how do I use express as a custom server in nextJs" },
    { _id: 2, title: "how do I use express as a custom server in nextJs" },
    { _id: 3, title: "how do I use express as a custom server in nextJs" },
    { _id: 4, title: "how do I use express as a custom server in nextJs" },
    { _id: 5, title: "how do I use express as a custom server in nextJs" },

]

const popularTag = [
    { _id: 1, name: 'javascript', totalQuestions: 5 },
    { _id: 2, name: 'react', totalQuestions: 523 },
    { _id: 3, name: 'next', totalQuestions: 53 },
    { _id: 4, name: 'vue', totalQuestions: 5 },
    { _id: 5, name: 'redux', totalQuestions: 10 },
]

const RightSideBar = () => {

    return (
        <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col  overflow-x-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px] custom-scrollbar">
            <div>
                <h3 className="h3-bold text-dark200_light900" >Top Questions</h3>
                <div className="mt-7 flex w-full flex-col gap-[30px]">

                    {
                        hotQuestion.map((question) => (
                            <Link
                                href={`/question/${question._id}`}
                                key={question._id}
                                className="flex cursor-pointer items-center justify-between gap-7">
                                <p className="body-medium text-dark500_light700">{question.title}</p>
                                <Image
                                    src="/assets/icons/chevron-right.svg"
                                    alt="chevron right"
                                    height={20}
                                    width={20}
                                />
                            </Link>
                        ))

                    }
                </div>
            </div>
            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900" >Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {
                        popularTag.map((tag) => (
                            <RenderTag
                                key={tag._id}
                                _id={tag._id}
                                name={tag.name}
                                totalQuestions={tag.totalQuestions}
                                showCount
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default RightSideBar
