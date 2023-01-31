import React from "react";
import "../../style/utils/user-info-table.scss";

const UserInfoTable = () => {
    return (
        <div className="table-content">
            <h3>Personal Information</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Full name</p>
                            <p>Grace Effiom</p>
                        </td>

                        <td>
                            <p>Phone Number</p>
                            <p>07060780922</p>
                        </td>

                        <td>
                            <p>Email Address</p>
                            <p>grace@gmail.com</p>
                        </td>

                        <td>
                            <p>BVN</p>
                            <p>07060780922</p>
                        </td>

                        <td>
                            <p>Gender</p>
                            <p>Female</p>
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
                            <p>Email Address</p>
                            <p>grace@gmail.com</p>
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
                        <p>B.Scs</p>
                    </td>

                    <td>
                        <p>employment status</p>
                        <p>Employed</p>
                    </td>

                    <td>
                        <p>sector of employment</p>
                        <p>FinTech</p>
                    </td>

                    <td>
                        <p>Duration of employment</p>
                        <p>2 years</p>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>Office Email</p>
                        <p>grace@lendsqr.com</p>
                    </td>

                    <td>
                        <p>Monthly Income</p>
                        <p>₦200,000.00- ₦400,000.00</p>
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
                        <p>@grace_effiom</p>
                    </td>

                    <td>
                        <p>FaceBook</p>
                        <p>Grace Effiom</p>
                    </td>

                    <td>
                        <p>Instagram</p>
                        <p>@grace_effiom</p>
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
                        <p>Debby Ogana</p>
                    </td>

                    <td>
                        <p>Phone Number</p>
                        <p>07060780922</p>
                    </td>

                    <td>
                        <p>Email Address</p>
                        <p>debby@gmail.com</p>
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