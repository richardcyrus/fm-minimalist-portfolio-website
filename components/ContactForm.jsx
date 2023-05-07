'use client'

import React, { useReducer, useState } from 'react'

const initialState = {
  fullname: { value: '', touched: false, hasError: false, error: '' },
  email: { value: '', touched: false, hasError: false, error: '' },
  message: { value: '', touched: false, hasError: false, error: '' },
  isFormValid: false,
}

const UPDATE_FORM = 'UPDATE_FORM'
const RESET_FORM = 'RESET_FORM'

const validateInput = (name, value) => {
  let hasError = false
  let error = ''

  switch (name) {
    case 'fullname':
      if (value.trim() === '') {
        hasError = true
        error = 'This field is required'
      }
      break
      case 'email':
        const emailRegEx = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
        if (value.trim() === '') {
        hasError = true
        error = 'This field is required'
      } else if (!emailRegEx.test(value)) {
        hasError = true
        error = 'Please use a valid email address'
      }
      break
    case 'message':
      if (value.trim() === '') {
        hasError = true
        error = 'This field is required'
      }
      break
    default:
      break
  }

  return { hasError, error }
}

const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value)
  let isFormValid = true

  for (const key in formState) {
    const item = formState[key]

    if (key === name && hasError) {
      isFormValid = false
      break
    } else if (key !== name && item.hasError) {
      isFormValid = false
      break
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: false,
      isFormValid,
    },
  })
}

const onFocusOut = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value)
  let isFormValid = true

  for (const key in formState) {
    const item = formState[key]
    if (key === name && hasError) {
      isFormValid = false
      break
    } else if (key !== name && item.hasError) {
      isFormValid = false
      break
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: { name, value, hasError, error, touched: true, isFormValid },
  })
}

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      }
    case RESET_FORM:
      return action.data
    default:
      return state
  }
}

export default function ContactForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const [showError, setShowError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    let isFormValid = true

    for (const name in formState) {
      const item = formState[name]
      const { value } = item
      const { hasError, error } = validateInput(name, value)

      if (hasError) {
        isFormValid = false
      }

      if (name) {
        dispatch({
          type: UPDATE_FORM,
          data: { name, value, hasError, error, touched: true, isFormValid },
        })
      }
    }

    if (!isFormValid) {
      setShowError(true)
    } else {
      dispatch({
        type: RESET_FORM,
        data: initialState
      })
    }
  }

  return (
    <>
      {showError && !formState.isFormValid && (
        <div className="form__error">There was a problem with your entries.</div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form__control">
          <label htmlFor="fullname">Name</label>
          <input
            className={"form__input " + (formState.fullname.hasError ? "error" : "")}
            type="text"
            name="fullname"
            placeholder="Jane Appleseed"
            id="fullname"
            autoComplete="name"
            aria-required="true"
            required
            onChange={(e) => {
              onInputChange('fullname', e.target.value, dispatch, formState)
            }}
            onBlur={(e) => {
              onFocusOut('fullname', e.target.value, dispatch, formState)
            }}
            value={formState.fullname.value}
          />
          {formState.fullname.touched && formState.fullname.hasError && (
            <div className="error">{formState.fullname.error}</div>
          )}
        </div>
        <div className="form__control">
          <label htmlFor="email">Email Address</label>
          <input
            className={"form__input " + (formState.email.hasError ? "error" : "")}
            type="email"
            name="email"
            placeholder="email@example.com"
            id="email"
            autoComplete="email"
            aria-required="true"
            required
            onChange={(e) => {
              onInputChange('email', e.target.value, dispatch, formState)
            }}
            onBlur={(e) => {
              onFocusOut('email', e.target.value, dispatch, formState)
            }}
            value={formState.email.value}
          />
          {formState.email.touched && formState.email.hasError && (
            <div className="error">{formState.email.error}</div>
          )}
        </div>
        <div className="form__control">
          <label htmlFor="message">Message</label>
          <textarea
            className={"form__input " + (formState.message.hasError ? "error " : "")}
            name="message"
            id="message"
            cols="20"
            rows="3"
            placeholder="How can I help?"
            aria-required="true"
            required
            onChange={(e) => {
              onInputChange('message', e.target.value, dispatch, formState)
            }}
            onBlur={(e) => {
              onFocusOut('message', e.target.value, dispatch, formState)
            }}
            value={formState.message.value}
          />
          {formState.message.touched && formState.message.hasError && (
            <div className="error">{formState.message.error}</div>
          )}
        </div>
        <button type="submit" className="button button-primary">
          Send Message
        </button>
      </form>
    </>
  )
}
