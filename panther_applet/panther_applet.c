#include <gtk/gtk.h>
#include <gtk/gtkbutton.h>
#include <panel-applet.h>
#include <unistd.h>
#include <stdlib.h>

static gboolean applet_fill_cb (PanelApplet * applet, const gchar * iid, gpointer data);

PANEL_APPLET_IN_PROCESS_FACTORY ("PantherAppletFactory", PANEL_TYPE_APPLET, applet_fill_cb, NULL);

static void button_clicked(GtkWidget *widget, GdkEvent  *event, gpointer   user_data) {
	int pid=fork();
	if (pid == 0) {
		system("panther_launcher");
		exit(0);
	}
}

static void widget_realized_cb (GtkWidget *widget) {

	GdkRGBA color;
	gtk_widget_reset_style(widget);
	GtkStyleContext *style = gtk_widget_get_style_context (GTK_WIDGET(widget));
	if (style != NULL) {
		gtk_style_context_get_color(style,GTK_STATE_FLAG_NORMAL,&color);
		printf("R: %X G: %X B: %X\n",color.red,color.green,color.blue);
	}
}

static gboolean applet_fill_cb (PanelApplet *applet, const gchar * iid, gpointer data) {

	gboolean retval = FALSE;
	static gboolean set_name = FALSE;

	if (g_strcmp0 (iid, "PantherApplet") == 0) {
		if (!set_name) {
			g_set_application_name ("PantherLauncher");
			set_name=TRUE;
		}
		gtk_container_set_border_width(GTK_CONTAINER (applet), 0);
		gtk_widget_show_all(GTK_WIDGET(applet));
		GtkWidget* main_button = gtk_label_new(NULL);
		gtk_widget_set_margin_start(main_button,3);
		gtk_widget_set_margin_end(main_button,3);
		gtk_label_set_markup(GTK_LABEL(main_button),"<b>Applications</b>");
		GtkWidget* eventbox = gtk_event_box_new();
		gtk_container_add(GTK_CONTAINER(applet),eventbox);
		gtk_container_add(GTK_CONTAINER(eventbox),main_button);
		gtk_widget_show_all(GTK_WIDGET(applet));
		g_object_connect(G_OBJECT(eventbox),"signal::button_release_event",button_clicked,NULL,NULL);
		g_object_connect(G_OBJECT(main_button),"signal::realize",G_CALLBACK(widget_realized_cb),main_button,NULL);
		retval = TRUE;
	}

	return retval;
}
