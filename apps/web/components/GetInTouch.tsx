"use client";

import LocationIcon from "@workspace/assets/icons/location.svg";
import PhoneIcon from "@workspace/assets/icons/phone.svg";
import ShareIcon from "@workspace/assets/icons/share.svg";
import FacebookIcon from "@workspace/assets/icons/facebook.svg";
import InstagramIcon from "@workspace/assets/icons/instagram.svg";
import XIcon from "@workspace/assets/icons/X.svg";
import LinkedinIcon from "@workspace/assets/icons/linkedin.svg";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Field,
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
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .regex(/^[\d\s\-\+\(\)]+$/, "Enter a valid phone number."),
  review: z
    .string()
    .min(1, "Review is required.")
    .max(500, "Review cannot exceed 500 characters."),
});

const GetInTouch = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
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
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-dark-500 text-4xl md:text-5xl font-bold">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg font-normal text-gray-700">
              Using it can make you sound like you have been studying english for a long time. Here's the challenge
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex gap-x-4 items-center pb-4 border-b border-gray-100">
              <div className="rounded-lg bg-primary p-4">
                <LocationIcon className="shrink-0 text-white size-6" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h6 className="text-base text-gray-700 font-normal">
                  Location
                </h6>
                <p className="text-lg font-normal text-dark-500">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
              </div>
            </div>
            <div className="flex gap-x-4 items-center pb-4 border-b border-gray-100">
              <div className="rounded-lg bg-primary p-4">
                <PhoneIcon className="shrink-0 text-white size-6" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h6 className="text-base text-gray-700 font-normal">
                  Phone Number
                </h6>
                <p className="text-lg font-normal text-dark-500">
                  (319) 555-0115
                </p>
              </div>
            </div>
            <div className="flex gap-x-4 items-center pb-4 border-b border-gray-100">
              <div className="rounded-lg bg-primary p-4">
                <ShareIcon className="shrink-0 text-white size-6" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h6 className="text-base text-gray-700 font-normal">
                  Follow Us
                </h6>
                <div className="flex items-center gap-x-4">
                  {" "}
                  <Link href={"facebook.com"} className="group">
                    <FacebookIcon className="group-hover:text-primary text-dark-500 transition-colors" />
                  </Link>
                  <Link href={"instagram.com"} className="group">
                    <InstagramIcon className="group-hover:text-primary text-dark-500 transition-colors" />
                  </Link>
                  <Link href={"x.com"} className="group">
                    <XIcon className="group-hover:text-primary text-dark-500 transition-colors" />
                  </Link>
                  <Link href={"linkedin.com"} className="group">
                    <LinkedinIcon className="group-hover:text-primary text-dark-500 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          id="review-form"
          className="flex flex-col gap-y-6 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-2xl"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-input-name">Name</FieldLabel>
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
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-input-phone">
                    Phone Number
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-input-phone"
                    type="tel"
                    aria-invalid={fieldState.invalid}
                    placeholder="(319) 555-0115"
                    autoComplete="tel"
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
    </section>
  );
};
export default GetInTouch;
