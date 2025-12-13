import Image from "next/image";
import ProfileCard from "./ProfileCard";
import LikeIcon from "@workspace/assets/icons/like.svg";
import CommentIcon from "@workspace/assets/icons/comment.svg";
import Link from "next/link";

const BlogCard = ({
  author,
  slug,
  comments,
  description,
  image,
  likes,
  title,
}: BlogPost) => {
  return (
    <Link href={`/blog/${slug}`} className="flex flex-col gap-y-4 hover:drop-shadow-2xl transition-all">
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[350px] rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1.5 text-base text-dark-500 font-normal">
            <LikeIcon className="w-auto h-auto"/> {likes} Likes
          </div>
          <div className="flex items-center gap-x-1.5 text-base text-dark-500 font-normal">
            <CommentIcon className="w-auto h-auto" /> {comments.length} Comments
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl text-dark-500 font-bold">{title}</h3>
          <p className="text-base text-gray-700 font-normal">{description}</p>
        </div>
        <ProfileCard
          avatar={author.avatar}
          name={author.name}
          role={author.role}
        />
      </div>
    </Link>
  );
};
export default BlogCard;
