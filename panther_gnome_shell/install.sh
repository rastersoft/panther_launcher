#!/bin/bash

EXTENSION_UUID='slingshotgnome@rastersoft.com'

rm -rf ~/.local/share/gnome-shell/extensions/$EXTENSION_UUID
mkdir -p ~/.local/share/gnome-shell/extensions/$EXTENSION_UUID
cp -a * ~/.local/share/gnome-shell/extensions/$EXTENSION_UUID/

# list enabled extensions
EXTENSION_LIST=`gsettings get org.gnome.shell enabled-extensions  | sed 's/.*\[//' | sed 's/\].*//'`

# check if extension is already enabled
EXTENSION_ENABLED=`echo $EXTENSION_LIST | grep $EXTENSION_UUID`

if [ "$EXTENSION_ENABLED" = "" ]
then
  if [ "$EXTENSION_LIST" = "" ]
  then
    SEPARATOR=""
  else
    SEPARATOR=","
  fi
  # enable extension
  gsettings set org.gnome.shell enabled-extensions "[$EXTENSION_LIST $SEPARATOR '$EXTENSION_UUID']"
  # extension is not available
  echo "Extension with ID $EXTENSION_UUID has been enabled. Restart Gnome Shell to take effect."
else
  echo "Extension with ID $EXTENSION_UUID was already installed. Restart Gnome Shell to take effect any change in it."
fi
