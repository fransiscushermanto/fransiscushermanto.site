"use client";

import { cx } from "@pandacss/css";
import { Card, Icon, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { LuMail, LuMapPin } from "react-icons/lu";
import { useForm } from "react-hook-form";

import { SocialMedia } from "@/components/elements";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { toaster } from "@/components/ui/toaster";
import useHandlePreventLeavePage from "@/hooks/use-handle-prevent-leave-page";
import { useRSendMessage, type ContactParams } from "@/repositories/contact";
import { deepEqual } from "@/utils/object";

import { defaultValues, TOAST_DURATION } from "./constants";
import { contactCss } from "./styles";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactParams>({
    defaultValues,
  });

  const { mutateAsync, isPending: isSendingMessage } = useRSendMessage({
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const isDirty = !deepEqual(defaultValues, watch());

  async function onSubmit(data: ContactParams) {
    toaster.promise(mutateAsync({ variables: data }), {
      success: {
        title: "Message Sent!",
        description:
          "Thank you for your message. I will get back to you as soon as possible.",
        duration: TOAST_DURATION,
      },
      error: {
        title: "Message Failed to Sent!",
        description:
          "There was an error sending your message. Please try again later.",
        duration: TOAST_DURATION,
      },
      loading: { title: "Sending Message...", description: "Please wait" },
    });
  }

  useHandlePreventLeavePage({
    enabled: isDirty || isSendingMessage,
  });

  return (
    <div className={cx("contact-page", "container", contactCss)}>
      <div className="inner-container">
        <h1 className="title heading-text">Contact Me</h1>
        <p className="subtitle sub-heading-text">
          Feel free to get in touch with me. I am always open to discuss new
          projects, creative ideas or opportunities to be part of your vision.
        </p>
        <div className="contact-row">
          <Card.Root className="contact-column">
            <Card.Title mb="6">Contact Information</Card.Title>
            <div className="personal-information">
              <div className="email">
                <span className="icon">
                  <Icon>
                    <LuMail />
                  </Icon>
                </span>
                <div className="detail">
                  <div className="detail__label">Email</div>
                  <a href="mailto:fransiscus.huang47@gmail.com">
                    fransiscus.huang47@gmail.com
                  </a>
                </div>
              </div>
              <div className="location">
                <span className="icon">
                  <Icon>
                    <LuMapPin />
                  </Icon>
                </span>
                <div className="detail">
                  <div className="detail__label">Location</div>
                  <span>Medan, Indonesia</span>
                </div>
              </div>
            </div>
            <div className="social-media">
              <Text as="h3" mb="3" fontWeight="normal" className="title">
                Social Media
              </Text>
              <SocialMedia />
            </div>
          </Card.Root>
          <Card.Root className="contact-column">
            <Card.Title mb="6">Send me a message</Card.Title>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack flexDirection="row" gap="4">
                <Field
                  label="Name"
                  invalid={!!errors.name}
                  errorText={errors.name?.message as string}
                  disabled={isSendingMessage}
                >
                  <Input
                    size="sm"
                    placeholder="Your Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                </Field>
                <Field
                  label="Email"
                  invalid={!!errors.email}
                  errorText={errors.email?.message as string}
                  disabled={isSendingMessage}
                >
                  <Input
                    size="sm"
                    placeholder="example@gmail.com"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                </Field>
              </Stack>
              <Field
                label="Subject"
                invalid={!!errors.subject}
                errorText={errors.subject?.message as string}
                disabled={isSendingMessage}
              >
                <Input
                  size="sm"
                  placeholder="Subject"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </Field>
              <Field
                label="Message"
                invalid={!!errors.message}
                errorText={errors.message?.message as string}
                disabled={isSendingMessage}
              >
                <Textarea
                  size="sm"
                  placeholder="Message"
                  rows={5}
                  {...register("message", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </Field>
              <Button loading={isSendingMessage} type="submit">
                Send Message
              </Button>
            </form>
          </Card.Root>
        </div>
      </div>
    </div>
  );
};

export default Contact;
