function slugify(title) {
    const string = title.toLowerCase().split(" ");
    const slug = string.join("-");

    return slug;
}
