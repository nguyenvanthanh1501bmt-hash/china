import { newsPort } from "../data/newsPost.js";

/**
 * Chuyển YouTube link dạng watch?v= thành embed
 */
function convertYouTubeLink(url) {
    if (!url) return '';
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
}

/**
 * Khởi tạo event listeners cho trang thêm bài viết
 */
function initializeAddPostPage() {
    const addPostForm = document.getElementById('addPostForm');
    const btnAddVocab = document.getElementById('btnAddVocab');
    const vocabContainer = document.getElementById('vocabularyContainer');

    // Thêm vocab
    btnAddVocab?.addEventListener('click', () => {
        const row = document.createElement('div');
        row.className = 'vocab-row';
        row.innerHTML = `
            <input type="text" name="vocabWord[]" placeholder="Word" required>
            <input type="text" name="vocabMeaning[]" placeholder="Meaning" required>
            <button type="button" class="btn-remove">×</button>
        `;
        vocabContainer.appendChild(row);
    });

    // Xóa vocab
    vocabContainer.addEventListener('click', e => {
        if (e.target.classList.contains('btn-remove')) {
            e.target.parentElement.remove();
        }
    });

    // Submit form
    addPostForm?.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            title: document.getElementById('postTitle').value.trim(),
            category: document.getElementById('postCategory').value,
            author: document.getElementById('postAuthor').value.trim(),
            content: document.getElementById('postContent').value.trim(),
            video: convertYouTubeLink(document.getElementById('postVideo').value.trim()),
            createdAt: new Date().toISOString()
        };

        // Lấy vocab
        const vocabWords = Array.from(document.querySelectorAll('input[name="vocabWord[]"]')).map(i => i.value.trim());
        const vocabMeanings = Array.from(document.querySelectorAll('input[name="vocabMeaning[]"]')).map(i => i.value.trim());
        const vocabulary = [];
        for (let i=0;i<vocabWords.length;i++) {
            if (vocabWords[i] && vocabMeanings[i]) {
                vocabulary.push({word: vocabWords[i], meaning: vocabMeanings[i]});
            }
        }
        formData.vocabulary = vocabulary;

        // Validation
        if (!formData.title || !formData.author || !formData.category) {
            alert('Vui lòng điền đầy đủ các trường bắt buộc!');
            return;
        }
        if (formData.content.length < 100) {
            alert('Nội dung bài viết phải có ít nhất 100 ký tự!');
            return;
        }
        if (!formData.video) {
            alert('Vui lòng nhập URL video!');
            return;
        }

        const allSaveAddPostData = JSON.parse(localStorage.getItem('saveAddPost')) || [];
        allSaveAddPostData.push(formData);
        localStorage.setItem('saveAddPost', JSON.stringify(allSaveAddPostData));

        alert('Tạo bài viết thành công! 🎉\nTiêu đề: ' + formData.title + '\nDanh mục: ' + formData.category);
        addPostForm.reset();
    });
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeAddPostPage);

// Load fullNews
function loadNews() {
    const localPosts = JSON.parse(localStorage.getItem('saveAddPost')) || [];

    function escapeHtml(unsafe) {
        return unsafe.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
    }

    function textToHtml(text) {
        if (!text) return '';
        const paragraphs = text.replace(/\r/g,'').split(/\n\s*\n+/);
        return paragraphs.map(p=>`<p>${escapeHtml(p).replace(/\n/g,'<br>')}</p>`).join('');
    }

    const convertedPosts = localPosts.map((post,index)=>({
        id: newsPort.length + index + 1,
        description: post.title,
        type: post.category,
        type1: post.category,
        type2: 'Latest',
        author: post.author,
        video: post.video,
        content: textToHtml(post.content),
        vocabulary: post.vocabulary || []
    }));

    return [...convertedPosts.reverse(), ...newsPort];
}

export let fullNews = loadNews();