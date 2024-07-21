<%@ page contentType="text/html; ISO-8859-1" language="java" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Registration</title>
    </head>
    <body>
        <h1>Registration</h1>
        <form:form modelAttribute="registration">
            <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        <form:input path="name"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="submit" value="Add Registration">
                    </td>
                </tr>
            </table>
        </form:form>
    </body>
</html>
