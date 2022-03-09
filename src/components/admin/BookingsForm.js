import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookingSchema } from '../../utils/yupSchemas';

const BookingsForm = ({ sendBooking }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const onSubmit = (formData) => {
    console.log('Form Data: ', formData);

    sendBooking(formData).catch(console.error);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder='name..' />
        {errors.name && <span>{errors.name.message}</span>}

        <input {...register('email')} placeholder='Email..' />
        {errors.email && <span>{errors.email.message}</span>}

        <button>Send</button>
      </form>
    </>
  );
};

export default BookingsForm;
