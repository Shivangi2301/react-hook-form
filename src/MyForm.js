import React from 'react';
import { useForm } from 'react-hook-form';

const MyFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          {...register('age', {
            required: 'Age is required',
            min: {
              value: 18,
              message: 'You must be at least 18 years old',
            },
          })}
        />
        {errors.age && (
          <span className="error-message">{errors.age.message}</span>
        )}
      </div>

      <div>
        <input
          type="checkbox"
          id="agreeTerms"
          {...register('agreeTerms', {
            required: 'You must agree to the terms and conditions',
          })}
        />
        <label htmlFor="agreeTerms">I agree to the terms and conditions</label>

        {errors.agreeTerms && (
          <span className="error-message">{errors.agreeTerms.message}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default MyFormComponent;
