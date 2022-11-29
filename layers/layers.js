ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([105.576817, 8.575526, 109.891868, 10.917049]);
var wms_layers = [];

var format_Matdodanso_0 = new ol.format.GeoJSON();
var features_Matdodanso_0 = format_Matdodanso_0.readFeatures(json_Matdodanso_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Matdodanso_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matdodanso_0.addFeatures(features_Matdodanso_0);
var lyr_Matdodanso_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Matdodanso_0, 
                style: style_Matdodanso_0,
                interactive: true,
    title: 'Matdodanso<br />\
    <img src="styles/legend/Matdodanso_0_0.png" /> 1258<br />\
    <img src="styles/legend/Matdodanso_0_1.png" /> 339<br />\
    <img src="styles/legend/Matdodanso_0_2.png" /> 109<br />\
    <img src="styles/legend/Matdodanso_0_3.png" /> 401<br />\
    <img src="styles/legend/Matdodanso_0_4.png" /> 1777<br />\
    <img src="styles/legend/Matdodanso_0_5.png" /> 568<br />\
    <img src="styles/legend/Matdodanso_0_6.png" /> 2985<br />\
    <img src="styles/legend/Matdodanso_0_7.png" /> 221<br />'
        });

lyr_Matdodanso_0.setVisible(true);
var layersList = [lyr_Matdodanso_0];
lyr_Matdodanso_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Danso': 'Danso', 'Dientich': 'Dientich', 'Matdodanso': 'Matdodanso', });
lyr_Matdodanso_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'Danso': 'TextEdit', 'Dientich': 'TextEdit', 'Matdodanso': 'TextEdit', });
lyr_Matdodanso_0.set('fieldLabels', {'ID_0': 'inline label', 'ISO': 'inline label', 'NAME_0': 'inline label', 'ID_1': 'inline label', 'NAME_1': 'inline label', 'ID_2': 'inline label', 'NAME_2': 'inline label', 'TYPE_2': 'inline label', 'ENGTYPE_2': 'inline label', 'NL_NAME_2': 'inline label', 'VARNAME_2': 'inline label', 'Danso': 'inline label', 'Dientich': 'inline label', 'Matdodanso': 'inline label', });
lyr_Matdodanso_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});