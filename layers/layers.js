var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.660000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_Cundinamarca_1 = new ol.format.GeoJSON();
var features_Departamento_Cundinamarca_1 = format_Departamento_Cundinamarca_1.readFeatures(json_Departamento_Cundinamarca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_Cundinamarca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_Cundinamarca_1.addFeatures(features_Departamento_Cundinamarca_1);
var lyr_Departamento_Cundinamarca_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_Cundinamarca_1, 
                style: style_Departamento_Cundinamarca_1,
                popuplayertitle: 'Departamento_Cundinamarca',
                interactive: true,
    title: 'Departamento_Cundinamarca<br />\
    <img src="styles/legend/Departamento_Cundinamarca_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Departamento_Cundinamarca_1_1.png" /> 1 - 120<br />\
    <img src="styles/legend/Departamento_Cundinamarca_1_2.png" /> 120 - 527<br />\
    <img src="styles/legend/Departamento_Cundinamarca_1_3.png" /> 527 - 1634<br />\
    <img src="styles/legend/Departamento_Cundinamarca_1_4.png" /> 1634 - 3739<br />\
    <img src="styles/legend/Departamento_Cundinamarca_1_5.png" /> 3739 - 7991<br />' });
var group_Departamentos_Capas = new ol.layer.Group({
                                layers: [lyr_Departamento_Cundinamarca_1,],
                                fold: 'open',
                                title: 'Departamentos_Capas'});

lyr_GoogleHybrid_0.setVisible(true);lyr_Departamento_Cundinamarca_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_Departamentos_Capas];
lyr_Departamento_Cundinamarca_1.set('fieldAliases', {'fid': 'fid', 'No.': 'No.', 'OBJECTID': 'OBJECTID', 'MpCodigo': 'Código del municipio', 'MpNombre': 'Nombre del municipio', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'MpAltitud': 'MpAltitud', 'Restriccion': 'Restriccion', 'Depto': 'Depto', 'ÁreaSembrada(Ha)': 'Área Sembrada (hectáreas)', 'ÁreaCosechada(Ha)': 'Área Cosechada (hectáreas)', 'Producción(Ton)': 'Producción (toneladas)', 'Rendimiento(Ton/ha)': 'Rendimiento (toneladas/hectárea)', });
lyr_Departamento_Cundinamarca_1.set('fieldImages', {'fid': 'TextEdit', 'No.': 'Range', 'OBJECTID': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'Range', 'MpAltitud': 'Range', 'Restriccion': 'TextEdit', 'Depto': 'TextEdit', 'ÁreaSembrada(Ha)': 'TextEdit', 'ÁreaCosechada(Ha)': 'TextEdit', 'Producción(Ton)': 'TextEdit', 'Rendimiento(Ton/ha)': 'TextEdit', });
lyr_Departamento_Cundinamarca_1.set('fieldLabels', {'fid': 'hidden field', 'No.': 'inline label - visible with data', 'OBJECTID': 'hidden field', 'MpCodigo': 'inline label - visible with data', 'MpNombre': 'inline label - visible with data', 'MpArea': 'hidden field', 'MpNorma': 'hidden field', 'MpCategor': 'hidden field', 'MpAltitud': 'hidden field', 'Restriccion': 'hidden field', 'Depto': 'hidden field', 'ÁreaSembrada(Ha)': 'hidden field', 'ÁreaCosechada(Ha)': 'inline label - visible with data', 'Producción(Ton)': 'hidden field', 'Rendimiento(Ton/ha)': 'hidden field', });
lyr_Departamento_Cundinamarca_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});