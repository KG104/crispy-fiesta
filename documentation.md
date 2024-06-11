Leo Knittel, Valentin Spiroski und Konstantin Gerlach

# Arbeitsanteile:
Leo Knittel:


Valentin Sprioski:
 - equipment.json
 - equipmentController.js

Konstantin Gerlach:
- usersController.js
- users.json


# Anforderungen und deren Umsetzung:
Users:
Per Post soll ein neuer User hinzugefügt werden und per get sollen alle oder bei Angabe einer ID als URL Parameter ein einziger User ausgegeben werden. Über put lässt sich ein User editieren und mit delete löschen. Wird ein neuer Nutzer via Post erstellt, wird zunächst mit der crypto-Bibliothek eine zufällige ID generiert. Diese kann per put auch nicht mehr veröndert werden. Danach wird geprüft, ob auch alle erforderlichen Daten im post body übertragen wurden, ansonsten wird eine Fehlermeldung ausgegeben. Es wird allerdings nicht geprüft, ob die Email tatsächlich valider Email-Syntax entspricht. Das eingebene Passwort wird nicht im Klartext gespeichert, sondern mit der crypto Bibliothek gehasht. Das registryDate ist der Zeitpunkt der Regisitrierung und wird per Date() erzeugt, allerdings nicht weiter umformatiert. Die Ausgabe, die Löschung und das Aktualisieren eines bestimmten Users durchlaufen zunächst alle User und wenn ein User mit der gesuchten ID existiert, erfolgt die entsprechende Aktion.

Equipment:


Borrows:

# Test-Daten:


# Abgedeckte Fehlerfälle:
- Zugriffsversuch auf User mit ID, die nicht existiert (GET, PUT und DELETE)
- Erstellung eines Users mit unvollständigen Daten