# SlingShot for Gnome Shell

This is an extension for Gnome Shell that allows to use Slingshot Launcher
(from Elementary OS) with Gnome Shell. It replaces the ACTIVITIES button with
an APPLICATIONS button that, when clicked on, launches Slingshot Launcher.

## How to install

Just type

        ./install

and it will install the extension in your account. You also need to have
installed Slingshot Launcher. Under Ubuntu is as easy as type

        sudo add-apt-repository ppa:elementary-os/daily
        sudo apt-get update
        sudo apt-get install slingshot-launcher gala

It is mandatory to also install the 'gala' window manager, even if it is
not used, because slingtshot needs some dconf files from it, but has a
bug in the dependencies list.

Maybe you will want to also install 'plank', 'elementary-icon-theme' and
'elementary-theme' packages to have a full Pantheon experience under Gnome
Shell. To ensure that your system uses the elementary themes, just install
also the 'gnome-tweak-tool' package and use it to set the icons, gtk theme and
window theme to the elementary ones. Also, if you are using Ubuntu, don't forget
to run

        sudo su
        echo "export LIBOVERLAY_SCROLLBAR=0" > /etc/X11/Xsession.d/80overlayscrollbars
        exit

This will disable the overlay scrollbars and also fix a bug with the colors in
GTK.

In other distros, you should try to find a repository with those packages. If
it doesn't exist, you must compile them from source code. These are the programs
you have to compile:

    * slingshot-launcher
    * gala
    * plank
    * elementary-icon-theme
    * elementary-theme

## History of versions:

    1: First public version
    2: Source code cleaned

## Contacting the author

Created by Raster Software Vigo (rastersoft) 
http://www.rastersoft.com 
https://github.com/rastersoft/slingshot_gnome 
