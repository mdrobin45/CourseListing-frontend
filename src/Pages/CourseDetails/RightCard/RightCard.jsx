import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
   FaChalkboardTeacher,
   FaChartPie,
   FaRegCalendarAlt,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import useAPI from "../../../Hooks/useAPI";
import useUser from "../../../Hooks/useUser";
import styles from "./styles.module.css";

const RightCard = ({ courseDetails }) => {
   const { id } = useParams();
   const { userId } = useUser();
   const { enrollCourse } = useAPI();
   const navigate = useNavigate();

   // Send enroll request to server
   const mutation = useMutation({
      mutationKey: ["enrollCourse"],
      mutationFn: (enrollmentInfo) => enrollCourse(enrollmentInfo),
      onSuccess: () => {
         toast.success("Enroll Successful");
         navigate("/dashboard/progress-courses");
      },
   });

   // Enrollment info
   const enrollmentInfo = {
      dueDate: "20 Feb 2024",
      course: id,
      userId,
   };
   // Handle course enrollment
   const handleEnrolment = () => {
      mutation.mutate(enrollmentInfo);
   };
   return (
      <div className={styles.mainWrapper}>
         <div
            className={styles.thumbnail}
            style={{
               backgroundImage: `url(${courseDetails?.thumbnail})`,
               backgroundPosition: "center center",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}></div>
         <h2 className={styles.includeHeading}>Course Includes:</h2>
         <ul>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <LiaMoneyBillWaveSolid className={styles.courseInfoIcon} />{" "}
                  Price
               </p>
               <p className="text-xl font-bold text-red-500">
                  ${courseDetails?.price}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <FaChalkboardTeacher className={styles.courseInfoIcon} />{" "}
                  Instructor
               </p>
               <p className={styles.courseInfoValue}>
                  {courseDetails?.instructor}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <MdOutlineWatchLater className={styles.courseInfoIcon} />{" "}
                  Duration
               </p>
               <p className={styles.courseInfoValue}>
                  {courseDetails?.duration}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <FaChartPie className={styles.courseInfoIcon} /> Enrollment
                  Status
               </p>
               <p className={styles.courseInfoValue}>
                  {courseDetails?.enrollmentStatus}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <FaMapLocation className={styles.courseInfoIcon} /> Location
               </p>
               <p className={styles.courseInfoValue}>
                  {courseDetails?.location}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <FaRegCalendarAlt className={styles.courseInfoIcon} />{" "}
                  Schedule
               </p>
               <p className={styles.scheduleInfo}>{courseDetails?.schedule}</p>
            </li>
         </ul>
         <button
            disabled={!userId}
            onClick={handleEnrolment}
            className={`${!userId ? "opacity-70" : ""} ${styles.enrollBtn}`}>
            {mutation.isPending ? (
               <div role="status">
                  <svg
                     aria-hidden="true"
                     className="w-8 h-8 mx-auto text-gray-200 animate-spin fill-blue-600"
                     viewBox="0 0 100 101"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                     />
                     <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                     />
                  </svg>
               </div>
            ) : (
               "Enroll Now"
            )}
         </button>
      </div>
   );
};

export default RightCard;
