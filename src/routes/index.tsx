import React from 'react';
import Layout from '@/views/Layout/index'
import Login from '@/views/Login/index'
import Register from '@/views/Rigister/index'
import { Route, Routes } from 'react-router';
import Upload from '@/components/Upload/index';
import RequireAuth from '@/components/Auth/RequireAuth';
import RedirectIfAuthenticated from '@/components/Auth/RedirectIfAuthenticated';
import Home from '@/views/Home';
import HomePhotoDetail from '@/views/Home/HomePhotoDetail';
import Album from '@/views/Album';
import AlbumList from '@/views/Album/AlbumList';
import AddAlbum from '@/views/Album/AddAlbum';
import EditAlbum from '@/views/Album/EditAlbum';
import Photo from '@/views/Photo';
import PhotoList from '@/views/Photo/PhotoList';
import AddPhoto from '@/views/Photo/AddPhoto';
import Article from '@/views/Article';
import ArticleList from '@/views/Article/ArticleList';
import AddArticle from '@/views/Article/AddArticle';
import EditArticle from '@/views/Article/EditArticle';
import ArticleDetail from '@/views/Article/ArticleDetail';
import Collection from '@/views/Collection';
import PhotoGallery from '@/views/PhotoGallery';
import PhotoWall from '@/views/PhotoWall';
import LLM from '@/views/LLM';


const APP: React.FC = () => {
  return (
    <div>
      <Routes>
        {/* 需要登录才能访问的页面 */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* 主页照片详情 */}
            <Route path="homephoto/:_id" element={<HomePhotoDetail />} />
            {/* 嵌套路由-文章 */}
            <Route path='article' element={<Article />}>
              <Route index element={<ArticleList />} />
              <Route path="detail/:_id" element={<ArticleDetail />} />
              <Route path="editArticle/:_id" element={<EditArticle />} />
            </Route>
            {/* 收藏 */}
            <Route path='collection' element={<Collection />}>
              <Route index element={<Collection />} />
            </Route>
            {/* 相册 */}
            <Route path="album" element={<Album />}>
              <Route index element={<AlbumList />} />
              <Route path="addAlbum" element={<AddAlbum />} />
              <Route path="editAlbum/:_id" element={<EditAlbum />} />
            </Route>
            {/* 相册照片 */}
            <Route path="photo" element={<Photo />} >
              <Route index element={<PhotoList />} />
              <Route path="addPhoto/:albumId" element={<AddPhoto />} />
            </Route>
            {/* 照片墙 */}
            <Route path="/photowall" element={<PhotoWall />} />
          </Route>
          
          {/* 图片上传 */}
          <Route path="/upload" element={<Upload />} />
          {/* 添加文章 */}
          <Route path="/addArticle" element={<AddArticle />} />
          {/* 首页图片详情 */}
          <Route path="/homephotodetail/:_id" element={<HomePhotoDetail />} />
          {/* 照片画廊 */}
          <Route path="/photogallery" element={<PhotoGallery />} />
          {/* 大模型 */}
          <Route path="llm" element={<LLM />} />

        </Route>

        {/* 已登录用户不能访问登录页面 */}
        <Route element={<RedirectIfAuthenticated />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 其他公共页面 */}
      </Routes>
    </div>
  );
}

export default APP
