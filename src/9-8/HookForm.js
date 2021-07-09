import { useForm } from "react-hook-form";
import React from "react";
import content from "./static/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(5),
    email: yup.string().required("Please enter email").email()
});


const HookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  console.log(register);

  return (
    <div>
      <h2>React-hook-form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <div key={key}>
              <p>
                <label>{input.label}</label>
              </p>
              <p>
                <input
                  className="input"
                  name={input.name}
                  type={input.type}
                  {...register(input.name)}

                />
              </p>
              <p className="messages">{errors[input.name]?.message}</p>
            </div>
          );
        })}
        <button className="btn" type="submit"> submit </button>
      </form>
    </div>
  );
};

export default HookForm;
