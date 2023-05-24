import s from './SubscribeForm.module.scss';

const SubscribeForm = () => {

    const hendleFormSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
      <p className={s.formTitle}>
        Be the first one to know when we launch our beta!
      </p>
      <form
        name="email-form"
        autoComplete="on"
        noValidate
        onClick={hendleFormSubmit}
        className={s.form}
      >
        <label>
          <input
            className={s.formInput}
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </label>
        <button type="submit" className={s.formBtn}>
          Sign-up
        </button>
      </form>
    </>
  );
};

export default SubscribeForm;
