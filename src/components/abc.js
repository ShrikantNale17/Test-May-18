import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Add() {

  // const [formdata, setFormdata] = useState({
  //   firstname: '',
  //   lastname: '',
  //   gender: '',
  //   email: '',
  //   address: '',
  //   country: '',
  //   state: '',
  //   pin: '',
  //   prof_info: {
  //     skills: [],
  //     experience: []
  //   }
  // })

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <div className="container my-4">
      <main>
        <div className="py-5 text-center">
          <h2>Add Candidate</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-5">
            <div className="col-md-7 col-lg-8 ms-auto me-auto">
              <h4 className="mb-3">Basic Info</h4>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label">First name</label>
                  <input type="text" name='firstName' className="form-control" value='' {...register('firstName')}/>
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Last name</label>
                  <input type="text" name='lastName' className="form-control" value='' {...register('lastName')} />
                </div>

                <div className="col-12">
                  <label className="form-label">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name='gender' type="radio" value="male" {...register('gender')}/>
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" name='gender' type="radio" value="female" {...register('gender')}/>
                      <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" />
                      <label className="form-check-label">Other</label>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>

                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" placeholder="1234 Main St"></textarea>
                </div>

                <div className="col-md-5">
                  <label className="form-label">Country</label>
                  <select className="form-select">
                    <option value="">Choose...</option>
                    <option>India</option>
                    <option>United States</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <select className="form-select">
                    <option value="">Choose...</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Pin / Zip</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Professional Info</h4>

              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">
                    Choose your skills
                    <span className="small text-muted">(min 3 skills)</span>
                  </label>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Angular</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">React</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Node.JS</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">JavaScript</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Flutter</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Java</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-12">
                  <label className="form-label">
                    <strong>
                      Experience
                      <span className="small text-muted">(min 2, max 5 items)</span>
                    </strong>
                  </label>
                  <div className="card mx-3 mt-3">
                    <div className="card-body">
                      <h6 className="card-title text-muted mb-3">
                        Experience #1
                        <span className="float-end text-danger fw-normal">Remove</span>
                      </h6>
                      <div className="row g-3">
                        <div className="col-6">
                          <label className="form-label">Company Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                          <label className="form-label">Duration <span className="text-muted">(in months)</span></label>
                          <input type="number" className="form-control" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Describe your responsibilities</label>
                          <textarea className="form-control"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mx-3 mt-3">
                    <div className="card-body">
                      <h6 className="card-title text-muted mb-3">
                        Experience #2
                        <span className="float-end text-danger fw-normal">Remove</span>
                      </h6>
                      <div className="row g-3">
                        <div className="col-6">
                          <label className="form-label">Company Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                          <label className="form-label">Duration <span className="text-muted">(in months)</span></label>
                          <input type="number" className="form-control" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Describe your responsibilities</label>
                          <textarea className="form-control"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="d-block mt-3">Add more experience</span>
                </div>
              </div>

              <hr className="my-4" />

              <button className="btn btn-primary" type="submit">Save Candidate</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Add