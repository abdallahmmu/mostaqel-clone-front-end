import React from "react";

const OfferForm = ({ formik, EditOffer, handleClose }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="row">
        {Object.keys(formik.initialValues).map((item) => {
          return item == "description" ? (
            <div className="form-group mb-3 col-12" key={item}>
              <label htmlFor={item}>{item}</label>
              <textarea
                className="form-control "
                id={item}
                name={item}
                type="number"
                onChange={formik.handleChange}
                value={formik.values[item]}
                rows="3"
              ></textarea>
              <span className="text-danger">{formik.errors[item]}</span>
            </div>
          ) : (
            <div className="form-group mb-3 col-6" key={item}>
              <label htmlFor={item}>{item}</label>
              <input
                className="form-control  col-6 mb-2"
                id={item}
                name={item}
                type="number"
                value={formik.values[item]}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors[item]}</span>
              {item == "amount" && formik.values[item] >= 10 && (
                <span className="text-secondary mt-2 p-3">
                  Paid to you: ${formik.values[item]} - $
                  {(formik.values[item] * 0.2).toFixed(2)} fees = $
                  {(formik.values[item] * 0.8).toFixed(2)}
                </span>
              )}
            </div>
          );
        })}

        <div className="form-group mb-3 text-center">
          <button
            type="submit"
            className="btn btn-primary me-5"
            disabled={formik.values == formik.initialValues}
          >
            Submit
          </button>
          {EditOffer && (
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => {
                handleClose();
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default OfferForm;
