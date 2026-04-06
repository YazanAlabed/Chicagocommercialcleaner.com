# Unsplash Image Download Guide

## How to Download Images

1. Visit each URL below
2. Click the **"Download free"** button (top right)
3. Choose **"Large"** size (1920x1280)
4. Save with the suggested filename
5. Move to the appropriate folder

---

## Hero Image (Save to: /images/hero/)

**Filename:** `hero-commercial-cleaning.jpg`

**Download from:**
https://unsplash.com/photos/group-of-female-janitors-in-rubber-gloves-and-face-masks-cleaning-surfaces-in-the-office-8ncQcNQhJ-c

**Alt:** Professional cleaning team at work

---

## Service Images (Save to: /images/services/)

### 1. office-cleaning.jpg
**Download from:** https://unsplash.com/s/photos/office-cleaning
**Look for:** Professional cleaner in modern office, vacuuming or wiping surfaces
**Search term:** "office cleaning professional"

### 2. janitorial-services.jpg
**Download from:** https://unsplash.com/s/photos/janitor-trolley
**Look for:** Janitor with cleaning cart, professional uniform
**Search term:** "janitor trolley commercial"

### 3. post-construction.jpg
**Download from:** https://unsplash.com/s/photos/construction-site
**Look for:** New building interior, clean construction site
**Search term:** "post construction cleaning"

### 4. medical-facility.jpg
**Download from:** https://unsplash.com/s/photos/hospital-cleaning
**Look for:** Medical-grade cleaning, healthcare facility
**Search term:** "hospital cleaning medical"

### 5. restaurant-cleaning.jpg
**Download from:** https://unsplash.com/s/photos/restaurant-kitchen
**Look for:** Commercial kitchen, stainless steel surfaces
**Search term:** "restaurant kitchen commercial"

### 6. warehouse-cleaning.jpg
**Download from:** https://unsplash.com/s/photos/warehouse-interior
**Look for:** Clean warehouse interior, industrial space
**Search term:** "warehouse interior clean"

### 7. industrial-cleaning.jpg
**Download from:** https://unsplash.com/s/photos/factory-floor
**Look for:** Manufacturing facility, industrial equipment
**Search term:** "factory floor industrial"

### 8. carpet-cleaning.jpg
**Download from:** https://unsplash.com/s/photos/carpet-cleaning
**Look for:** Carpet cleaning machine in action
**Search term:** "carpet cleaning service"

### 9. floor-care.jpg
**Download from:** https://unsplash.com/s/photos/floor-waxing
**Look for:** Shiny commercial floor, floor buffer
**Search term:** "floor waxing commercial"

### 10. window-cleaning.jpg
**Download from:** https://unsplash.com/s/photos/window-cleaner-building
**Look for:** Window washers on building, commercial window cleaning
**Search term:** "window cleaning high rise"

### 11. day-porter.jpg
**Download from:** https://unsplash.com/s/photos/facility-maintenance
**Look for:** Maintenance worker in lobby, professional setting
**Search term:** "facility maintenance worker"

### 12. after-hours.jpg
**Download from:** https://unsplash.com/s/photos/night-office
**Look for:** Office at night, evening cleaning
**Search term:** "night office cleaning"

### 13. green-cleaning.jpg
**Download from:** https://unsplash.com/s/photos/eco-cleaning
**Look for:** Green cleaning products, eco-friendly supplies
**Search term:** "eco friendly cleaning products"

---

## Location Images (Save to: /images/locations/)

### 1. loop.jpg
**Download from:** https://unsplash.com/s/photos/chicago-loop
**Look for:** Chicago downtown skyline, business district
**Search term:** "Chicago Loop skyline"

### 2. river-north.jpg
**Download from:** https://unsplash.com/s/photos/chicago-river-north
**Look for:** Merchandise Mart, modern buildings
**Search term:** "Chicago River North"

### 3. west-loop.jpg
**Download from:** https://unsplash.com/s/photos/chicago-west-loop
**Look for:** Fulton Market, Randolph Street
**Search term:** "Chicago West Loop"

### 4. streeterville.jpg
**Download from:** https://unsplash.com/s/photos/chicago-streeterville
**Look for:** Northwestern hospital, lakefront
**Search term:** "Chicago Streeterville"

### 5. gold-coast.jpg
**Download from:** https://unsplash.com/s/photos/chicago-gold-coast
**Look for:** Historic mansions, luxury buildings
**Search term:** "Chicago Gold Coast"

### 6. south-loop.jpg
**Download from:** https://unsplash.com/s/photos/chicago-south-loop
**Look for:** Museum Campus, Soldier Field
**Search term:** "Chicago South Loop"

### 7. lincoln-park.jpg
**Download from:** https://unsplash.com/s/photos/chicago-lincoln-park
**Look for:** Lincoln Park neighborhood, DePaul
**Search term:** "Chicago Lincoln Park"

### 8. wicker-park.jpg
**Download from:** https://unsplash.com/s/photos/chicago-wicker-park
**Look for:** Milwaukee Avenue, artistic neighborhood
**Search term:** "Chicago Wicker Park"

### 9. hyde-park.jpg
**Download from:** https://unsplash.com/s/photos/chicago-hyde-park
**Look for:** University of Chicago, campus
**Search term:** "Chicago Hyde Park"

### 10. lakeview.jpg
**Download from:** https://unsplash.com/s/photos/chicago-lakeview
**Look for:** Wrigleyville, neighborhood street
**Search term:** "Chicago Lakeview"

---

## Additional Images Needed

### About Page
**Filename:** `about-team.jpg`
**Search:** "professional team" or "cleaning crew uniform"

### Contact Page
**Filename:** `contact-office.jpg`
**Search:** "commercial building entrance" or "office building chicago"

### Blog Posts (for future)
**Filename:** `blog-cleaning-tips.jpg`
**Search:** "cleaning supplies organized" or "cleaning checklist"

---

## Quick Download Commands (if you have `curl` installed)

For each image, you can also try:

```bash
# Note: Unsplash may block automated downloads
# These are example commands - use the website for best results

# Download specific image by ID
curl -L "https://unsplash.com/photos/[PHOTO_ID]/download?force=true" -o hero-cleaning.jpg
```

**Better approach:** Visit each URL above and click the download button.

---

## Image Usage Rights

All Unsplash images are:
- Free to download
- Free for commercial use
- No attribution required (but appreciated)

See: https://unsplash.com/license

---

## Image Specifications

- **Recommended Size:** Large (1920x1280px)
- **Format:** JPG for photos
- **File Size:** Keep under 500KB per image for web performance
- **Optimization:** Compress images using TinyPNG.com after download

---

## Total Images Needed: 30

- 1 hero image
- 13 service images
- 10 location images
- 3-5 general/misc images

---

## After Downloading

1. Rename files to match the names above
2. Place in correct folders
3. Run `npm run build` to verify images are accessible
4. Update code to reference images (if not already done)
