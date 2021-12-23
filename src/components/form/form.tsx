import React, { useEffect, useState } from "react";
import {
  DeepPartial,
  SubmitHandler,
  UnpackNestedValue,
  useForm,
  UseFormProps,
} from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";
import { Error } from "../error/error";
import { appActions } from "../../redux/actions";
import { TEXT_ERRORS } from "src/constants";

interface IProps<T> extends UseFormProps {
  defaultValues?: UnpackNestedValue<DeepPartial<T>>;
  children?: React.ReactNode;
  onSubmit: SubmitHandler<T>;
  schema: AnyObjectSchema;
  className?: string;
  isSingleValidate?: boolean;
  requestMessageFailed?: string;
}

interface EnrichedChildren {
  name: string;
}

export const Form = <T,>({
  className,
  defaultValues,
  children,
  onSubmit,
  isSingleValidate,
  requestMessageFailed,
  schema,
}: IProps<T>) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string[]>([]);
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (Object.keys(errors).length) {
      const transformErrors = [];
      for (const [, value] of Object.entries(errors)) {
        transformErrors.push(`${value.message} `);
      }
      setError(transformErrors);
    }
    return () => {
      dispatch(appActions.setStatus(null));
      setError([]);
    };
  }, [dispatch, errors]);

  const renderErrors = () => {
    if (requestMessageFailed) {
      return <Error error={requestMessageFailed} />;
    } else if (isSingleValidate) {
      return (
        Object.keys(errors).length !== 0 && (
          <Error error={TEXT_ERRORS.INCORRECT_DATA} />
        )
      );
    } else {
      return <Error error={error} />;
    }
  };
  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<EnrichedChildren>(child)) {
          return child;
        }

        return child?.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                style: Object.keys(errors).find((i) => i === child.props.name)
                  ? { border: "1px solid red" }
                  : {},
                key: child.props.name,
              },
            })
          : child;
      })}
      {renderErrors()}
    </form>
  );
};
