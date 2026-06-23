import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  age: z.coerce
    .number()
    .min(18, "Age must be 18 or above")
    .max(60, "Age must be below 60"),

  email: z.string().email("Invalid email"),

  password: z
    .string()
    .min(6, "Password should contain at least 6 characters"),
});

function UserForm({ addUser }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {
    addUser(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "300px",
      }}
    >
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Name"
        {...register("name")}
      />
      <p style={{ color: "red" }}>{errors.name?.message}</p>

      <input
        type="number"
        placeholder="Age"
        {...register("age")}
      />
      <p style={{ color: "red" }}>{errors.age?.message}</p>

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <p style={{ color: "red" }}>{errors.email?.message}</p>

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <p style={{ color: "red" }}>{errors.password?.message}</p>

      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;