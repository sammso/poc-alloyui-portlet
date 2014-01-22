<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %>
<%@ taglib uri="http://liferay.com/tld/security" prefix="liferay-security" %>
<%@ taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>
<%@ taglib uri="http://liferay.com/tld/util" prefix="liferay-util" %>
<%@ taglib uri="http://alloy.liferay.com/tld/aui" prefix="aui" %>

<portlet:defineObjects />
<input type="hidden" name="portletClassName" value="poc-portlet"/>
<script type="portlet/configuration">
[{ "name": "These" },
{ "name": "are" },
{ "name": "porlet" },
{ "name": "init" },
{ "name": "parameters" }
]
</script>

<aui:button-row>
	<aui:button cssClass="addButton" disabled="true" value="Add Button"/>
	<aui:button cssClass="clearButton" disabled="true" value="Clear Button"/>
</aui:button-row>
<h1>Parameters</h1>
<ul>
</ul>