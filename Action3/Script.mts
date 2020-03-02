' Sélectionne la première commande de la liste
WpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").SelectCell 0,3 @@ hightlight id_;_1999689288_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT ORDER").Click @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf9.xml_;_

' Supprime la commande avec validation d'une boite de dialogue
WpfWindow("Micro Focus MyFlight Sample").WpfButton("WpfButton").Click @@ hightlight id_;_2065116072_;_script infofile_;_ZIP::ssf10.xml_;_
Dialog("Notification").WinButton("Oui").Click @@ hightlight id_;_1574698_;_script infofile_;_ZIP::ssf11.xml_;_

' Vérification de la validation de suppression à l'aide d'un regex @@ hightlight id_;_2071115608_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 95 deleted").Click

WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_198688_;_script infofile_;_ZIP::ssf7.xml_;_
