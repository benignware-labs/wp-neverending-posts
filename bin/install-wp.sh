#!/usr/bin/env sh

# docker-compose run --rm wp install-wp

# command: sh -c "sleep 20 && wp core install --path=/var/www/html --url=localhost --title=test --admin_user=test --admin_password=test --admin_email=test@example.com"

# Install WordPress.
wp core install \
  --title="My Wordpress Site" \
  --admin_user="wordpress" \
  --admin_password="wordpress" \
  --admin_email="admin@example.com" \
  --url="http://localhost:8030" \
  --skip-email

# Update permalink structure.
wp option update permalink_structure "/%year%/%monthnum%/%postname%/" --skip-themes --skip-plugins

# Activate twentythirteen theme
wp theme activate twentythirteen

# Activate plugin.
wp plugin activate neverending-posts
wp plugin activate wordpress-importer

# Import demo content
wp import vendor/lib/wptrt/theme-unit-test --authors=create
