import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userName, userDetails, setVal } from '../../store/slices/UserSlice'
// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other"
// }

interface IFormInput {
  firstName: String;
  gender: any;
  lastName: String
}


export const SessionStorage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [sesstionData, setSesstionData]: any = useState(``)
  const details = useSelector(userDetails)
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<IFormInput> = data => {
    localStorage.setItem('data', JSON.stringify(data))
  }
  // const dispatch = useDispatch(function)
  useEffect(() => {
    const testData: any = localStorage.getItem('data');
    const testDataObj = JSON.parse(testData);
    console.log(testDataObj.firstName)
    dispatch(setVal(testDataObj.firstName))
    console.log(details.data)
  }, [])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} defaultValue={details.data}/>
      <br />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <label>Gender Selection</label>
      <select {...register("gender")} >
        <option value="">---</option>
        <option value="1">female</option>
        <option value="2">male</option>
        <option value="3">other</option>
      </select>
      <br />
      {/* <select {...register("WEEW")} defaultValue={sesstionData.gender}>
        <option value="">---</option>
        <option value="1">WEEW1</option>
        <option value="2">WEEW2</option>
        <option value="3">WEEW3</option>
      </select>
      <br />
      <select {...register("RWAR")} defaultValue={sesstionData.gender}>
        <option value="">---</option>
        <option value="1">RWAR1</option>
        <option value="2">RWAR2</option>
        <option value="3">RWAR3</option>
      </select> */}
      <input type="submit" />
    </form>
  );
}

export default SessionStorage
