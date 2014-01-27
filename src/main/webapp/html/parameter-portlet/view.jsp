<%@include file="/html/init.jsp"%>
<!-- Portlet parameters are marked following way and you can fetch these by using instance.getConfig() -->
<script type="portlet/configuration">
[
	{ "name":"These"},
	{ "name":"are" },
	{ "name":"porlet"},
	{"name":"init" },
	{"name":"parameters"}
]</script>
<aui:button-row>
	<aui:button cssClass="addButton" disabled="true" value="Add Button"/>
	<aui:button cssClass="clearButton" disabled="true" value="Clear Button"/>
</aui:button-row>
<h1>Parameters</h1>
<ul>
</ul>