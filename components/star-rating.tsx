import { Rating } from "flowbite-react"

export default function StarRating({rating}){
    const ratingRounded = Math.round(rating)
    return (
        <Rating className="pt-2">
            {[...Array(ratingRounded)].map((e, i) => <Rating.Star color="#e3a008" />)}
            {[...Array(5-ratingRounded)].map((e, i) => <Rating.Star color="#d1d5db" />)}
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {rating} / 5
            </p>
        </Rating>
    )
}