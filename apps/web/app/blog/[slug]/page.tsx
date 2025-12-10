"use client";

import { allBlogs } from "@/constants";
import { useParams, useRouter } from "next/navigation";
import ArrowRight from "@workspace/assets/icons/arrow-right.svg";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import LikeIcon from "@workspace/assets/icons/like.svg";
import CommentIcon from "@workspace/assets/icons/comment.svg";
import CheckIcon from "@workspace/assets/icons/check-circle.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { Textarea } from "@workspace/ui/components/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  review: z
    .string()
    .min(1, "Review is required.")
    .max(500, "Review cannot exceed 500 characters."),
});

const BlogDetailsPage = () => {
  const params = useParams();
  const blog = allBlogs.filter((item) => item.slug === params.slug)[0];
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      review: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <section className="section-layout">
      <div className="flex flex-col gap-y-12 max-w-[820px] mx-auto w-full">
        <button
          onClick={() => router.back()}
          className="cursor-pointer flex items-center text-dark-500 font-normal text-base gap-x-2"
        >
          <ArrowRight className="rotate-180 size-6" /> Go Back
        </button>
        {blog && (
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-4">
              <Image
                src={blog.image}
                alt={blog.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[300px]  sm:h-[350px] md:h-[450px] rounded-2xl object-cover"
              />
              <div className="flex flex-col gap-y-4 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-1.5 text-base text-dark-500 font-normal">
                    <LikeIcon /> {blog.likes} Likes
                  </div>
                  <div className="flex items-center gap-x-1.5 text-base text-dark-500 font-normal">
                    <CommentIcon /> {blog.comments.length} Comments
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl text-dark-500 font-bold">
                    {blog.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 font-normal">
                    {blog.description}
                  </p>
                </div>
                <ProfileCard
                  avatar={blog.author.avatar}
                  name={blog.author.name}
                  role={blog.author.role}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div
                className="prose max-w-full"
                dangerouslySetInnerHTML={{ __html: blog.blog.content }}
              ></div>
              {blog.blog.features?.length ? (
                <ul className="list-none pl-4 text-base flex flex-col items-start gap-y-5 border-l-8 border-primary">
                  {blog.blog.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-x-2.5 text-dark-500"
                    >
                      <CheckIcon className="text-primary shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="flex flex-col gap-y-6 w-full">
              <h3 className="text-xl text-dark-500 font-bold">
                Customer Reviews
              </h3>
              <div className="flex flex-col gap-y-6 w-full">
                {blog.comments.map(
                  (
                    { author, rating, review, title }: BlogComment,
                    index: number
                  ) => (
                    <div
                      className="flex flex-col items-start gap-y-4 w-full"
                      key={index}
                    >
                      <ProfileCard
                        avatar={author.avatar}
                        name={author.name}
                        rating={rating}
                      />
                      <div className="flex flex-col gap-y-2 pb-4 border-b border-gray-100">
                        <h4 className="text-dark-500 font-bold text-base">
                          {title}
                        </h4>
                        <p className="text-base font-normal text-dark-500">
                          {review}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h3 className="text-dark-500 text-xl font-bold">
                Write Your Review
              </h3>
              <form id="review-form" className="flex flex-col gap-y-6 items-start" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-rhf-input-name">
                          Name
                        </FieldLabel>
                        <Input
                          {...field}
                          id="form-rhf-input-name"
                          aria-invalid={fieldState.invalid}
                          placeholder="Smith Johnson"
                          autoComplete="name"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-rhf-input-email">
                          Email Address
                        </FieldLabel>
                        <Input
                          {...field}
                          id="form-rhf-input-email"
                          type="email"
                          aria-invalid={fieldState.invalid}
                          placeholder="smith.johnson@example.com"
                          autoComplete="email"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="review"
                    control={form.control}
                    render={({ field, fieldState }) => {
                      const currentLength = field.value?.length ?? 0;
                      return (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="form-rhf-textarea-review">
                            Enter Your Review
                          </FieldLabel>
                          <div className="flex flex-col gap-y-2">
                            <Textarea
                              {...field}
                              id="form-rhf-textarea-review"
                              aria-invalid={fieldState.invalid}
                              maxLength={500}
                              placeholder="Enter Your Review"
                              rows={4}
                            />
                            <div className="text-right text-sm text-gray-500">
                              {currentLength}/500
                            </div>
                          </div>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      );
                    }}
                  />
                </FieldGroup>
                <Button className="w-full sm:max-w-[180px]">Submit</Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default BlogDetailsPage;
