import { Slug } from './slug'

test('should be able to create a new slug from base text',  () => {
    const slug = Slug.createFromText('Example slug title')
    expect(slug.value).toBe('example-slug-title')
})