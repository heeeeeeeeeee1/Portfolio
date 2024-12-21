import { useRef, useEffect, useMemo } from 'react'
import { useGraph, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
// import * as THREE from 'three'

export default function Greeting(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/greeting.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  // console.log(adtions) 했을 때 출력되는 값 확인 후 넣어주기
  // 1안 : 계속 움직임
  useEffect(() => {
    actions['Armature|mixamo.com|Layer0'].play()
  }, [actions])

  // 2안 : 버그?
  // useEffect(() => {
  //   const action = actions['Armature|mixamo.com|Layer0']
  //   if (action) {
  //     action.loop = false // 애니메이션 반복 비활성화 -> 2번? 인사하고 우측 바라봄ㅎ새로고침하면 무한 인사사
  //     action.play() // 애니메이션 한 번 재생
  //   }
  // }, [actions])


  // 3안 : 아바타 일정 시간 이후 멈추게 하기(동작으로 하려고 했는데 애초에 다운받은 아바타 액션 파일의 프레임이 조금 긴 느낌?)
  // useEffect(() => {
  //   const action = actions['Armature|mixamo.com|Layer0']
  //   if (action) {
  //     action.loop = false // 애니메이션 반복 비활성화
  //     action.play() // 애니메이션 한 번 재생

  //     // 애니메이션 종료 후 Y축을 0으로 설정
  //     action.clampWhenFinished = true; // 마지막 프레임에서 멈추도록 설정

  //     const animationDuration = 5; // 실제 애니메이션 길이에 맞게 조정


  //     // 애니메이션이 끝날 때까지 대기
  //     const timer = setTimeout(() => {
  //       action.stop(); // 애니메이션 정지
  //       group.current.rotation.y = 0; // Y축을 0으로 설정
  //     }, animationDuration * 1000); // 밀리초로 변환

  //     return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  //   }
  // }, [actions])


  useFrame(() => {
    if (group.current) {
      // group.current.position.y = -1 // 아바타를 아래로 이동
      group.current.rotation.y = 0.5
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[0, 0, 0]}>
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.004']} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials['Wolf3D_Hair.003']} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.003']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.003']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.003']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.004']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.004']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.003']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.004']} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/greeting.glb')
