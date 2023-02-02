import React from "react";
import "../style/utils/user-info-table.scss";
import { UserObject } from "./models";

interface Props{
    info?: UserObject,
}

const UserInfoTable = ({info}:Props) => {
    return (
        <div className="table-content">
            <h3>Personal Information</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Full name</p>
                            <p>{`${info?.profile.firstName} ${info?.profile.lastName}`}</p>
                        </td>

                        <td>
                            <p>Phone Number</p>
                            <p>{info?.profile.phoneNumber}</p>
                        </td>

                        <td>
                            <p>Email Address</p>
                            <p>{info?.email}</p>
                        </td>

                        <td>
                            <p>BVN</p>
                            <p>{info?.profile.bvn}</p>
                        </td>

                        <td>
                            <p>Gender</p>
                            <p>{info?.profile.gender}</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Marital Status</p>
                            <p>Single</p>
                        </td>

                        <td>
                            <p>Children</p>
                            <p>None</p>
                        </td>

                        <td>
                            <p>Type of residence</p>
                            <p>{info?.profile.address}</p>
                        </td>
                    </tr>
                </tbody>
            </table>



            <h3>Education and Employment</h3>
            <table>
                <tbody>
                <tr>
                    <td>
                        <p>level of education</p>
                        <p>{info?.education.level}</p>
                    </td>

                    <td>
                        <p>employment status</p>
                        <p>{info?.education.employmentStatus}</p>
                    </td>

                    <td>
                        <p>sector of employment</p>
                        <p>{info?.education.sector}</p>
                    </td>

                    <td>
                        <p>Duration of employment</p>
                        <p>{info?.education.duration}</p>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>Office Email</p>
                        <p>{info?.education.officeEmail}</p>
                    </td>

                    <td>
                        <p>Monthly Income</p>
                        <p>{`₦${info?.education.monthlyIncome[0]} - ₦${info?.education.monthlyIncome[1]}`}</p>
                    </td>

                    <td>
                        <p>loan repayment</p>
                        <p>40,000</p>
                    </td>
                </tr>
                </tbody>
            </table>


            <h3>Socials</h3>
            <table>
                <tbody>
                <tr>
                    <td>
                        <p>Twitter</p>
                        <p>{info?.socials.twitter}</p>
                    </td>

                    <td>
                        <p>FaceBook</p>
                        <p>{info?.socials.facebook}</p>
                    </td>

                    <td>
                        <p>Instagram</p>
                        <p>{info?.socials.instagram}</p>
                    </td>

                    <td className="empty"></td>
                </tr>
                </tbody>
            </table>


            <h3>Guarantor</h3>
            <table>
                <tbody>
                <tr>
                    <td>
                        <p>Full Name</p>
                        <p>{`${info?.guarantor.firstName} ${info?.guarantor.lastName}`}</p>
                    </td>

                    <td>
                        <p>Phone Number</p>
                        <p>{info?.guarantor.phoneNumber}</p>
                    </td>

                    <td>
                        <p>Address</p>
                        <p>{info?.guarantor.address}</p>
                    </td>

                    <td>
                        <p>Relationship</p>
                        <p>Sister</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserInfoTable;