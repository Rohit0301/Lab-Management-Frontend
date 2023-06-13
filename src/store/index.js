import { configureStore } from '@reduxjs/toolkit'
import userSlice from './UserSlice'
import PatientSlice from './patientSlice'
export default configureStore({
  reducer: {
    user: userSlice,
    patient: PatientSlice
  },
})